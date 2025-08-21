import os
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import JWTError, jwt
from dotenv import load_dotenv

# .env se values load karna
load_dotenv()

SECRET_KEY = os.getenv("ACCESS_TOKEN")
ALGORITHM = "HS256"   # Express me default HS256 hi use hota hai

# FastAPI ke liye security scheme
security = HTTPBearer()

def authenticate_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    try:
        # JWT verify karna
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Invalid or expired token"
        )
    # Express me res.locals hota hai, FastAPI me return kar dete hain
    return payload
