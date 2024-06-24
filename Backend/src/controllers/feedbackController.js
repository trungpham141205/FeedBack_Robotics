const connection = require('../config/database');

const getFormPage = (req, res) => {
    res.send('Hello World');
}

module.exports = {
    getFormPage,    
}