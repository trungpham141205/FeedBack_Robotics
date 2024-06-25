const connection = require('../config/database');

const getFormPage = (req, res) => {
    // res.send('Hello World');
    res.render('main', {title: 'Form Page'});
}

const getHomePage = (req, res) => {
    // return res.render('main.hbs');
    res.render('main', {title: 'Home Page'});
};

module.exports = {
    getFormPage, 
    getHomePage,   
}