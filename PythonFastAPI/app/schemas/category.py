from pydantic import BaseModel
from typing import Optional

class CategoryBase(BaseModel):
    name: str

class CategoryCreate(CategoryBase):
    pass

class CategoryUpdate(BaseModel):
    id: str
    name: str

class CategoryResponse(CategoryBase):
    id: str

    class Config:
        from_attributes = True  # ORM mode / mongo dict compatibility
