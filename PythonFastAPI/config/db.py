import asyncio
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from decouple import config

# Environment variables
MONGO_URL = config("MONGO_URL")
DB_NAME = config("DB_NAME", default="dashboard")

# Create Motor client and database instance
client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

def get_database() -> AsyncIOMotorDatabase:
    """FastAPI dependency for database access"""
    return db

async def test_connection():
    """Test database connection"""
    try:
        # Test connection
        await client.admin.command('ping')
        print("Connected to MongoDB")
        
        # List collections
        collections = await db.list_collection_names()
        print(f"Available collections: {collections}")
        
    except Exception as e:
        print(f"Connection failed: {e}")
        raise

if __name__ == "__main__":
    asyncio.run(test_connection())