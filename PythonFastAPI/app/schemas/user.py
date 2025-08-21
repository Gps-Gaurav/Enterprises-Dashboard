from pydantic import BaseModel, EmailStr, Field
from typing import Optional


class UserSignup(BaseModel):
    name: str
    contactNumber: str
    email: EmailStr
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserOut(BaseModel):
    id: str = Field(..., alias="_id")
    name: str
    email: EmailStr
    contactNumber: str
    status: bool

    class Config:
        populate_by_name = True
        from_attributes = True


class UserUpdateStatus(BaseModel):
    id: str
    status: bool


class ChangePassword(BaseModel):
    oldPassword: str
    newPassword: str


class ForgotPasswordRequest(BaseModel):
    email: EmailStr
