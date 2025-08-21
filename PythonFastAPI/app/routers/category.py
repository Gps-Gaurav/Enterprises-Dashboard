from fastapi import APIRouter, Depends, HTTPException
from bson import ObjectId
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from config.db import get_database
from app.services.authentication import authenticate_token
from app.services.check_role import check_role
from app.schemas.category import CategoryCreate, CategoryUpdate, CategoryResponse

router = APIRouter()

# Helper to convert ObjectId -> str
def category_helper(category) -> dict:
    return {
        "id": str(category["_id"]),
        "name": category["name"],
    }

# ➕ Add category
@router.post("/add", response_model=dict)
async def add_category(
    category: CategoryCreate,
    db: AsyncIOMotorDatabase = Depends(get_database),
    user: dict = Depends(authenticate_token),
    role: None = Depends(check_role),
):
    try:
        collection = db.category
        new_category = await collection.insert_one(category.dict())
        if new_category.inserted_id:
            return {"message": "Category added successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# 📋 Get all categories
@router.get("/get", response_model=list[CategoryResponse])
async def get_categories(
    db: AsyncIOMotorClient = Depends(get_database),
    user: dict = Depends(authenticate_token),
):
    collection = db.category
    categories = []
    async for cat in collection.find().sort("name", 1):
        categories.append(category_helper(cat))
    return categories

# ❌ Delete category by ID
@router.delete("/delete/{id}", response_model=dict)
async def delete_category(
    id: str,
    db: AsyncIOMotorClient = Depends(get_database),
    user: dict = Depends(authenticate_token),
    role: None = Depends(check_role),
):
    collection = db.category
    result = await collection.delete_one({"_id": ObjectId(id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Category ID does not exist")
    return {"message": "Category deleted successfully"}

# ✏️ Update category
@router.patch("/update", response_model=dict)
async def update_category(
    category: CategoryUpdate,
    db: AsyncIOMotorClient = Depends(get_database),
    user: dict = Depends(authenticate_token),
    role: None = Depends(check_role),
):
    collection = db.category
    result = await collection.update_one(
        {"_id": ObjectId(category.id)},
        {"$set": {"name": category.name}},
    )
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Category ID not found")
    return {"message": "Category updated successfully"}
