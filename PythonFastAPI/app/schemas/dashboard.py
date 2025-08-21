from pydantic import BaseModel

class DashboardResponse(BaseModel):
    category: int
    product: int
    bill: int
