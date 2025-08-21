import os
from fastapi import Depends, HTTPException, status
from dotenv import load_dotenv
from app.services.authentication import authenticate_token

load_dotenv()

USER_ROLE = os.getenv("USER")   # .env me USER="user" ya kuchh bhi hoga

def check_role(payload: dict = Depends(authenticate_token)):
    role = payload.get("role")
    if role == USER_ROLE:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Access denied"
        )
    return payload   # role authorized, route continue karega
