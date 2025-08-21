import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import user, category, product, bill, dashboard
app = FastAPI(title="FastAPI MongoDB App")

origins = ["*"]  # or specific domains
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Routers with prefixes and tags
app.include_router(user.router, prefix="/user", tags=["User"])
app.include_router(category.router, prefix="/category", tags=["Category"])
app.include_router(product.router, prefix="/product", tags=["Product"])
app.include_router(bill.router, prefix="/bill", tags=["Bill"])
app.include_router(dashboard.router, prefix="/dashboard", tags=["Dashboard"])

# Optional: Root endpoint to verify server is running
@app.get("/")
async def root():
    return {"message": "FastAPI MongoDB App is running"}

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="127.0.0.1", port=8000, reload=True)
