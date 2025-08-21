from fastapi import APIRouter, Depends, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId
from datetime import timedelta, datetime
from passlib.context import CryptContext
from jose import jwt
from email.mime.text import MIMEText
import smtplib
import os
from config.db import get_database
from app.services.authentication import authenticate_token
from app.services.check_role import check_role
from app.schemas.user import (
    UserSignup, UserLogin, UserOut,
    UserUpdateStatus, ChangePassword, ForgotPasswordRequest
)

router = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
JWT_SECRET = os.getenv("ACCESS_TOKEN", "change_me_in_env")
JWT_ALG = "HS256"
JWT_EXPIRE_HOURS = 8

def create_access_token(data: dict, expires_delta: timedelta | None = None) -> str:
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(hours=JWT_EXPIRE_HOURS))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, JWT_SECRET, algorithm=JWT_ALG)


def hash_password(plain: str) -> str:
    return pwd_context.hash(plain)


def verify_password(plain: str, hashed: str) -> bool:
    return pwd_context.verify(plain, hashed)


def _send_email(to_email: str, subject: str, html: str):
    smtp_user = os.getenv("EMAIL")
    smtp_pass = os.getenv("PASSWORD")
    if not smtp_user or not smtp_pass:
        return

    msg = MIMEText(html, "html")
    msg["Subject"] = subject
    msg["From"] = smtp_user
    msg["To"] = to_email

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(smtp_user, smtp_pass)
        server.sendmail(smtp_user, [to_email], msg.as_string())

@router.get("/test")
async def test():
    return {"message": "user router working"}
@router.post("/insert", status_code=200)
async def insert_user(user: UserSignup, db: AsyncIOMotorClient = Depends(get_database)):
    users = db.user
    existing = await users.find_one({"email": user.email})
    if existing:
        raise HTTPException(status_code=400, detail="Email already exists")

    doc = {
        "name": user.name,
        "contactNumber": user.contactNumber,
        "email": user.email,
        "password": hash_password(user.password),
        "status": True,
        "role": "admin",
        "createdAt": datetime.utcnow()
    }
    await users.insert_one(doc)
    return {"message": "user inserted successfully"}

@router.post("/signup", status_code=200)
async def signup(user: UserSignup, db: AsyncIOMotorClient = Depends(get_database)):
    users = db.user
    if await users.find_one({"email": user.email}):
        raise HTTPException(status_code=400, detail="email already exists")

    doc = {
        "name": user.name,
        "contactNumber": user.contactNumber,
        "email": user.email,
        "password": hash_password(user.password),
        "status": False,
        "role": "user",
        "createdAt": datetime.utcnow(),
    }
    await users.insert_one(doc)
    return {"message": "user created successfully"}


@router.post("/login")
async def login(payload: UserLogin, db: AsyncIOMotorClient = Depends(get_database)):
    users = db.user
    u = await users.find_one({"email": payload.email})
    if not u or not verify_password(payload.password, u["password"]):
        raise HTTPException(status_code=401, detail="incorrect username and password")
    if not u.get("status", False):
        raise HTTPException(status_code=401, detail="wait for admin approval")
    token = create_access_token({"email": u["email"], "role": u.get("role", "user")})
    return {"token": token}


@router.post("/forgotPassword")
async def forgot_password(body: ForgotPasswordRequest, db: AsyncIOMotorClient = Depends(get_database)):
    users = db.user
    u = await users.find_one({"email": body.email})
    html = "<p>If you requested a password reset, contact admin or use change-password after login.</p>"
    try:
        _send_email(body.email, "Password assistance", html)
    except Exception:
        pass
    return {"message": "password sent successfully to your email"}


@router.get("/get", response_model=list[UserOut])
async def get_users(db: AsyncIOMotorClient = Depends(get_database),
                    _user: dict = Depends(authenticate_token),
                    _role: None = Depends(check_role)):
    users = db.user
    out: list[UserOut] = []
    projection = {"name": 1, "email": 1, "contactNumber": 1, "status": 1}
    cursor = users.find({"role": "user"}, projection)
    async for doc in cursor:
        doc["_id"] = str(doc["_id"])
        doc["status"] = bool(doc.get("status", False))
        out.append(UserOut(**doc))
    return out


@router.patch("/update")
async def update_user_status(body: UserUpdateStatus, db: AsyncIOMotorClient = Depends(get_database),
                             _user: dict = Depends(authenticate_token),
                             _role: None = Depends(check_role)):
    users = db.user
    result = await users.update_one({"_id": ObjectId(body.id)}, {"$set": {"status": body.status}})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="user id not found")
    return {"message": "user updated successfully"}


@router.get("/checkToken")
async def check_token(_user: dict = Depends(authenticate_token),
                      _role: None = Depends(check_role)):
    return {"message": "true"}


@router.post("/changePassword")
async def change_password(body: ChangePassword, db: AsyncIOMotorClient = Depends(get_database),
                          current_user: dict = Depends(authenticate_token),
                          _role: None = Depends(check_role)):
    email = current_user.get("email")
    if not email:
        raise HTTPException(status_code=401, detail="unauthorized")
    users = db.user
    u = await users.find_one({"email": email})
    if not u or not verify_password(body.oldPassword, u["password"]):
        raise HTTPException(status_code=400, detail="old password is incorrect")
    new_hash = hash_password(body.newPassword)
    await users.update_one({"_id": u["_id"]}, {"$set": {"password": new_hash}})
    return {"message": "password changed successfully"}
