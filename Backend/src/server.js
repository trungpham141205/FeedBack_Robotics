require('dotenv').config();
require('./config/dbConfig');
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const mysql = require('mysql2');

const app = express();

// Config view engine and Setup static directory 
configViewEngine(app);

// Define route
app.use('/', webRoutes);

// test connection
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '141205',
    database: 'trungpham'
})

// simple query
connection.query(
    'SELECT * FROM Feedback f',
    function (error, results, fields){
        console.log(">>>results= ", results);
        console.log(">>>fields= ", fields);
    }
)

app.use(express.json());

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({ error: error.message });
});

module.exports = app;