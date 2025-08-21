from pydantic import BaseModel, EmailStr
from typing import List, Union

class BillCreate(BaseModel):
    name: str
    email: EmailStr
    contactNumber: str
    paymentMethod: str
    totalAmount: float
    productDetails: Union[List[dict], dict]
