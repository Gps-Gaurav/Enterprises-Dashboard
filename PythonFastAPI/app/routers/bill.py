# app/routers/bill.py

from fastapi import APIRouter, Depends, HTTPException, Response
from app.services.authentication import authenticate_token
from config.db import get_database
from app.schemas.bill import BillCreate
from bson import ObjectId
from datetime import datetime
import uuid
import os
from fastapi.responses import FileResponse
from jinja2 import Environment, FileSystemLoader
from weasyprint import HTML

# Router
router = APIRouter()

# PDF save directory
PDF_DIR = os.path.join(os.getcwd(), "generated_pdf")
os.makedirs(PDF_DIR, exist_ok=True)

# Jinja2 setup (report.html file rakhna hoga templates/report.html me)
env = Environment(loader=FileSystemLoader("templates"))


@router.post("/generateReport")
async def generate_report(order: BillCreate, user: dict = Depends(authenticate_token)):
    try:
        generated_uuid = str(uuid.uuid1())
        current_datetime = datetime.utcnow()
        current_user = user.get("username", "Gps-Gaurav")

        product_details = order.productDetails
        if not isinstance(product_details, list):
            product_details = [product_details]

        bill_data = {
            "uuid": generated_uuid,
            "name": order.name,
            "email": order.email,
            "contactNumber": order.contactNumber,
            "paymentMethod": order.paymentMethod,
            "total": order.totalAmount,
            "productDetails": product_details,
            "createdBy": current_user,
            "createdDate": current_datetime,
        }

        await db.bills.insert_one(bill_data)
        return {"uuid": generated_uuid}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/getPdf")
async def get_pdf(order: dict, user: dict = Depends(authenticate_token)):
    try:
        uuid_val = order.get("uuid")
        if not uuid_val:
            raise HTTPException(status_code=400, detail="UUID is required")

        pdf_path = os.path.join(PDF_DIR, f"{uuid_val}.pdf")

        # Agar PDF pehle se exist karta hai to return karo
        if os.path.exists(pdf_path):
            return FileResponse(pdf_path, media_type="application/pdf")

        # Bill DB se fetch karo
        bill = await db.bills.find_one({"uuid": uuid_val})
        if not bill:
            raise HTTPException(status_code=404, detail="Bill not found")

        template = env.get_template("report.html")
        html_content = template.render(
            productDetails=bill["productDetails"],
            name=bill["name"],
            email=bill["email"],
            contactNumber=bill["contactNumber"],
            paymentMethod=bill["paymentMethod"],
            totalAmount=f"{bill['total']:.2f}",
            createdBy=bill.get("createdBy", "Gps-Gaurav"),
            createdDate=bill["createdDate"].strftime("%Y-%m-%d %H:%M:%S"),
        )

        # Generate PDF
        HTML(string=html_content).write_pdf(pdf_path)

        return FileResponse(pdf_path, media_type="application/pdf")

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/getBills")
async def get_bills(user: dict = Depends(authenticate_token)):
    try:
        bills = []
        cursor = db.bills.find().sort("_id", -1)
        async for bill in cursor:
            bill["_id"] = str(bill["_id"])  # BSON -> String
            bills.append(bill)
        return bills
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.delete("/delete/{id}")
async def delete_bill(id: str, user: dict = Depends(authenticate_token)):
    try:
        result = await db.bills.delete_one({"_id": ObjectId(id)})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Bill not found")
        return {"message": "Bill deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
