from pydantic import BaseModel, Field
from typing import Optional

class ProductBase(BaseModel):
    name: str
    categoryId: str
    description: Optional[str] = None
    price: float
    status: Optional[bool] = True


class ProductCreate(ProductBase):
    pass


class ProductUpdate(BaseModel):
    id: str
    name: Optional[str] = None
    categoryId: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = None
    
class ProductUpdateStatus(BaseModel):
    id: str
    status: bool


class ProductResponse(ProductBase):
    id: str = Field(..., alias="_id")
    categoryName: Optional[str] = None  # join ke liye (category se fetch karenge)

    class Config:
        populate_by_name = True
        from_attributes = True
