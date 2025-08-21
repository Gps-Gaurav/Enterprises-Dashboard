import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
from decouple import config

MONGO_URL = config("MONGO_URL")
DB_NAME = config("DB_NAME", default="dashboard")

# Create a Motor client
client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

# Function to use in FastAPI dependencies
def get_database():
    return db

# Test connection
async def test():
    client = AsyncIOMotorClient(MONGO_URL)
    db = client[DB_NAME]
    print(await db.list_collection_names())

# Run test
if __name__ == "__main__":
    asyncio.run(test())
