const connection = require('../config/database');

const getFormPage = (req, res) => {

    'SELECT * FROM Feedback f',
    function (error, results, fields){
        console.log(">>>results= ", results);
    }
    res.send('Hello World');
}

module.exports = {
    getFormPage,    
}