process.removeAllListeners('warning');
const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const userRoute = require('./routes/user');
const categoryRoute = require('./routes/category');
const productRoute = require('./routes/product');
const billRoute = require('./routes/bill');
const dashboardRoute = require('./routes/dashboard');
const app = express();

// Request timeout middleware
app.use((req, res, next) => {
    req.setTimeout(30000); // 30 second timeout
    res.setTimeout(30000);
    next();
});
app.use(cors());
app.use(express.urlencoded({ extended:true}));
app.use(express.json());
app.use('/user',userRoute);
app.use('/category',categoryRoute);
app.use('/product',productRoute);
app.use('/bill',billRoute);
app.use('/dashboard',dashboardRoute);

app.use(express.static("Frontend"));

module.exports = app;






