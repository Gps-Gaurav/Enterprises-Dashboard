const mysql = require('mysql2');
const path = require('path');
require('dotenv').config();
const dotenvPath = path.resolve(__dirname, '../.env');
require('dotenv').config({ path: dotenvPath });
const connection = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // Add these options for better stability
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Improved error handling
connection.connect((err) => {
    if (!err) {
        console.log("Successfully connected to MySQL database");
    } else {
        console.error("Error connecting to database:");
        console.error(err);
        process.exit(1); // Exit if connection fails
    }
});

// Handle connection errors
connection.on('error', (err) => {
    console.error('Database connection error:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
        console.error('Database has too many connections.');
    }
    if (err.code === 'ECONNREFUSED') {
        console.error('Database connection was refused.');
    }
});

module.exports = connection;

