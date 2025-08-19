const express = require('express');
const connection = require('../connection');
const router = express.Router();
let ejs = require('ejs');
let pdf = require('html-pdf');
let path = require('path');
var fs = require('fs');
var uuid = require('uuid');
var auth = require('../services/authentication');

// bill.js

router.post('/generateReport', auth.authenticateToken, (req, res) => {
    try {
        const generatedUuid = uuid.v1();
        const orderDetails = req.body;
        const currentDateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const currentUser = 'Gps-Gaurav';

        // Handle product details
        let productdetailsReport = orderDetails.productDetails;
        
        // If productDetails is already an object/array, stringify it
        const productDetailsString = typeof productdetailsReport === 'string' 
            ? productdetailsReport 
            : JSON.stringify(productdetailsReport);

        console.log('Product Details before saving:', productDetailsString); // Debug log

        const query = "insert into bill (name,uuid,email,contactNumber,paymentMethod,total,productDetails,createdBy,createdDate) values (?,?,?,?,?,?,?,?,?)";
        connection.query(query, [
            orderDetails.name,
            generatedUuid,
            orderDetails.email,
            orderDetails.contactNumber,
            orderDetails.paymentMethod,
            orderDetails.totalAmount,
            productDetailsString,
            currentUser,
            currentDateTime
        ], (err, results) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json(err);
            }
            return res.status(200).json({ uuid: generatedUuid });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.post('/getPdf', auth.authenticateToken, function (req, res) {
    try {
        const orderDetails = req.body;
        if (!orderDetails || !orderDetails.uuid) {
            return res.status(400).json({ message: "UUID is required" });
        }

        const pdfPath = path.join(__dirname, '../generated_pdf', `${orderDetails.uuid}.pdf`);
        const pdfDir = path.join(__dirname, '../generated_pdf');
        
        if (!fs.existsSync(pdfDir)) {
            fs.mkdirSync(pdfDir, { recursive: true });
        }

        if (fs.existsSync(pdfPath)) {
            res.contentType('application/pdf');
            fs.createReadStream(pdfPath).pipe(res);
        } else {
            const query = "SELECT * FROM bill WHERE uuid = ?";
            connection.query(query, [orderDetails.uuid], (err, results) => {
                if (err) {
                    console.error('Database error:', err);
                    return res.status(500).json({ message: "Database error" });
                }

                if (results.length === 0) {
                    return res.status(404).json({ message: "Bill not found" });
                }

                const billData = results[0];
                let productDetails;

                try {
                    // Safely parse product details
                    if (typeof billData.productDetails === 'string') {
                        productDetails = JSON.parse(billData.productDetails);
                    } else {
                        productDetails = billData.productDetails;
                    }

                    // Ensure productDetails is an array
                    if (!Array.isArray(productDetails)) {
                        productDetails = [productDetails];
                    }

                    console.log('Parsed Product Details:', productDetails); // Debug log

                    const templateData = {
                        productDetails: productDetails,
                        name: billData.name,
                        email: billData.email,
                        contactNumber: billData.contactNumber,
                        paymentMethod: billData.paymentMethod,
                        totalAmount: parseFloat(billData.total).toFixed(2),
                        createdBy: billData.createdBy || 'Gps-Gaurav',
                        createdDate: billData.createdDate 
                            ? new Date(billData.createdDate).toLocaleString()
                            : new Date().toLocaleString()
                    };

                    console.log('Template Data:', templateData); // Debug log

                    ejs.renderFile(
                        path.join(__dirname, 'report.ejs'),
                        templateData,
                        (err, html) => {
                            if (err) {
                                console.error('Template error:', err);
                                return res.status(500).json({ message: "Error generating PDF" });
                            }

                            const options = {
                                format: 'A4',
                                border: {
                                    top: "20px",
                                    right: "20px",
                                    bottom: "20px",
                                    left: "20px"
                                }
                            };

                            pdf.create(html, options).toFile(pdfPath, function (err) {
                                if (err) {
                                    console.error('PDF creation error:', err);
                                    return res.status(500).json({ message: "Error creating PDF" });
                                }
                                res.contentType('application/pdf');
                                fs.createReadStream(pdfPath).pipe(res);
                            });
                        }
                    );
                } catch (error) {
                    console.error('Error processing product details:', error);
                    console.error('Raw product details:', billData.productDetails);
                    return res.status(500).json({ 
                        message: "Error processing bill data",
                        error: error.message 
                    });
                }
            });
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Updated getBills route to properly handle product details
router.get('/getBills', auth.authenticateToken, (req, res) => {
    const query = "select * from bill order by id DESC";
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }
        
        // Parse product details for each bill
        const processedResults = results.map(bill => {
            try {
                if (typeof bill.productDetails === 'string') {
                    bill.productDetails = JSON.parse(bill.productDetails);
                }
            } catch (error) {
                console.error(`Error parsing product details for bill ${bill.id}:`, error);
                bill.productDetails = [];
            }
            return bill;
        });

        return res.status(200).json(processedResults);
    });
});


router.delete('/delete/:id', auth.authenticateToken, (req, res) => {
    const id = req.params.id;
    var query = "delete from bill where id =?";
    connection.query(query, [id], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({
                    message: "Bill not found"
                })
            }
            return res.status(200).json({ message: "Bill deleted successfully" })
        }
        else {
            return res.status(500).json(err);
        }
    })
})
module.exports = router;