from fastapi import APIRouter, Depends, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
from config.db import get_database
from app.services.authentication import authenticate_token
from app.schemas.dashboard import DashboardResponse

router = APIRouter()

@router.get("/details", response_model=DashboardResponse)
async def get_dashboard_details(
    db: AsyncIOMotorClient = Depends(get_database),
    user: dict = Depends(authenticate_token),
):
    try:
        category_count = await db.category.count_documents({})
        product_count = await db.product.count_documents({})
        bill_count = await db.bill.count_documents({})

        return DashboardResponse(
            category=category_count,
            product=product_count,
            bill=bill_count
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
