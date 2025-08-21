from fastapi import APIRouter, Depends, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
from config.db import get_database
from app.services.authentication import authenticate_token
from app.services.check_role import check_role
from app.schemas.product import (
    ProductCreate,
    ProductUpdate,
    ProductUpdateStatus,
    ProductResponse,
)

from bson import ObjectId

router = APIRouter()


@router.post("/add")
async def add_product(
    product: ProductCreate,
    db: AsyncIOMotorClient = Depends(get_database),
    user: dict = Depends(authenticate_token),
    _: bool = Depends(check_role),
):
    try:
        product_data = product.dict()
        result = await db.product.insert_one(product_data)
        if result.inserted_id:
            return {"message": "Product added successfully"}
        raise HTTPException(status_code=500, detail="Failed to add product")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


from bson import ObjectId

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
        pipeline = [
            {"$match": {"categoryId": id, "status": True}},  # if stored as string
            {
                "$project": {
                    "_id": {"$toString": "$_id"},
                    "name": 1,
                    "description": 1,
                    "price": 1,
                    "status": 1,
                    "categoryId": 1,
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
    db: AsyncIOMotorClient = Depends(get_database),
    user: dict = Depends(authenticate_token),
):
    try:
        product = await db.product.find_one({"_id": ObjectId(id)})
        if not product:
            raise HTTPException(status_code=404, detail="Product not found")
        
        # Convert _id to string manually
        product["_id"] = str(product["_id"])
        return product
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.patch("/update")
async def update_product(
    product: ProductUpdate,
    db: AsyncIOMotorClient = Depends(get_database),
    user: dict = Depends(authenticate_token),
    _: bool = Depends(check_role),
):
    try:
        try:
            obj_id = ObjectId(product.id)
        except bson_errors.InvalidId:
            raise HTTPException(status_code=400, detail="Invalid product ID")

        result = await db.product.update_one(
            {"_id": obj_id},
            {"$set": product.dict(exclude={"id"})},
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
    try:
        try:
            obj_id = ObjectId(id)
        except bson_errors.InvalidId:
            raise HTTPException(status_code=400, detail="Invalid product ID")

        result = await db.product.delete_one({"_id": obj_id})

        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Product ID does not exist")

        return {"message": "Product deleted successfully"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


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
