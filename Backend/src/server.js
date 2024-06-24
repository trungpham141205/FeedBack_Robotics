require('dotenv').config();
// require('./config/dbConfig');
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');
const app = express();

// Config view engine and Setup static directory 
configViewEngine(app);

// Define route
app.use('/', webRoutes);


// simple query
// connection.query(
//     'SELECT * FROM Feedback f',
//     function (error, results, fields){
//         console.log(">>>results= ", results);
//     }
// )

app.use(express.json());

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({ error: error.message });
});

module.exports = app;