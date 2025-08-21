from fastapi import APIRouter, Depends, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from config.db import get_database
from app.services.authentication import authenticate_token
from app.services.check_role import check_role
from app.schemas.product import (
    ProductCreate,
    ProductUpdate,
    ProductUpdateStatus,
    ProductResponse,
)

from bson import ObjectId, errors as bson_errors


router = APIRouter()

@router.post("/add")
async def add_product(
    product: ProductCreate,
    db: AsyncIOMotorClient = Depends(get_database),
    user: dict = Depends(authenticate_token),
    _: bool = Depends(check_role),
):
    product_data = product.dict()

    # Remove productId if present; backend will assign it
    product_data.pop("productId", None)

    # Convert categoryId to ObjectId for MongoDB
    try:
        product_data["categoryId"] = ObjectId(product_data["categoryId"])
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid category ID")

    # Auto-generate numeric productId
    last_product = await db.product.find_one(sort=[("productId", -1)])
    product_data["productId"] = (last_product["productId"] + 1) if last_product else 1

    result = await db.product.insert_one(product_data)

    return {
        "message": "Product added successfully",
        "_id": str(result.inserted_id),
        "productId": product_data["productId"]
    }

@router.get("/get", response_model=list[ProductResponse])
async def get_products(
    db: AsyncIOMotorClient = Depends(get_database),
    user: dict = Depends(authenticate_token),
):
    try:
        pipeline = [
            # Convert categoryId from string to ObjectId for lookup
            {
                "$addFields": {
                    "categoryObjId": {"$toObjectId": "$categoryId"}
                }
            },
            {
                "$lookup": {
                    "from": "category",
                    "localField": "categoryObjId",
                    "foreignField": "_id",
                    "as": "category",
                }
            },
            {"$unwind": "$category"},
            {
                "$project": {
                    "_id": {"$toString": "$_id"},
                    "name": 1,
                    "description": 1,
                    "price": 1,
                    "status": 1,
                    "categoryId": {"$toString": "$category._id"},
                    "categoryName": "$category.name",
                }
            },
        ]
        products = await db.product.aggregate(pipeline).to_list(length=None)
        return products
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/getByCategory/{id}", response_model=list[ProductResponse])
async def get_products_by_category(
    id: str,
    db: AsyncIOMotorClient = Depends(get_database),
    user: dict = Depends(authenticate_token),
):
    try:
        category_obj_id = ObjectId(id)
        pipeline = [
            {"$match": {"categoryId": category_obj_id, "status": True}},
            {
                "$lookup": {
                    "from": "category",
                    "localField": "categoryId",
                    "foreignField": "_id",
                    "as": "category",
                }
            },
            {"$unwind": "$category"},
            {
                "$project": {
                    "_id": {"$toString": "$_id"},
                    "name": 1,
                    "description": 1,
                    "price": 1,
                    "status": 1,
                    "categoryId": {"$toString": "$category._id"},
                    "categoryName": "$category.name",
                }
            },
        ]
        products = await db.product.aggregate(pipeline).to_list(length=None)
        return products
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))



@router.get("/getById/{id}", response_model=ProductResponse)
async def get_product_by_id(
    id: str,
    db: AsyncIOMotorDatabase = Depends(get_database),
    user: dict = Depends(authenticate_token),
):
    if not id or id == "undefined":
        raise HTTPException(status_code=400, detail="Product ID is required")

    try:
        oid = ObjectId(id)
    except bson_errors.InvalidId:
        raise HTTPException(status_code=400, detail="Invalid ObjectId format")

    product = await db["product"].find_one({"_id": oid})
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    # Convert ObjectId fields to string
    product["_id"] = str(product["_id"])
    product["categoryId"] = str(product["categoryId"])  # <-- fix here

    return product

@router.patch("/update")
async def update_product(
    product: ProductUpdate,
    db: AsyncIOMotorClient = Depends(get_database),
    user: dict = Depends(authenticate_token),
    _: bool = Depends(check_role),
):
    # Validate product ID
    if not product.id or product.id == "undefined":
        raise HTTPException(status_code=400, detail="Product ID is required")

    try:
        obj_id = ObjectId(product.id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid product ID")

    # Prepare update data (exclude ID)
    update_data = product.dict(exclude={"id"})
    # Convert categoryId to string if exists
    if "categoryId" in update_data and update_data["categoryId"]:
        update_data["categoryId"] = str(update_data["categoryId"])

    try:
        result = await db.product.update_one(
            {"_id": obj_id},
            {"$set": update_data}
        )
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Product ID does not exist")

        return {"message": "Product updated successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

@router.delete("/delete/{id}")
async def delete_product(
    id: str,
    db: AsyncIOMotorClient = Depends(get_database),
    user: dict = Depends(authenticate_token),
    _: bool = Depends(check_role),
):
    if not id or id == "undefined":
        raise HTTPException(status_code=400, detail="Product ID is required")

    # Try ObjectId first
    try:
        filter_query = {"_id": ObjectId(id)}
    except bson_errors.InvalidId:
        # Fallback to numeric productId
        try:
            filter_query = {"productId": int(id)}
        except ValueError:
            raise HTTPException(status_code=400, detail="Invalid product ID")

    result = await db.product.delete_one(filter_query)
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Product ID does not exist")
    return {"message": "Product deleted successfully"}

@router.patch("/updateStatus")
async def update_status(
    data: ProductUpdateStatus,
    db: AsyncIOMotorClient = Depends(get_database),
    user: dict = Depends(authenticate_token),
    _: bool = Depends(check_role),
):
    try:
        try:
            obj_id = ObjectId(data.id)
        except bson_errors.InvalidId:
            raise HTTPException(status_code=400, detail="Invalid product ID")

        result = await db.product.update_one(
            {"_id": obj_id}, {"$set": {"status": data.status}}
        )

        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Product ID does not exist")

        return {"message": "Product status updated successfully"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
