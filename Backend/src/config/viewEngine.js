const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');

const configViewEngine = (app) => {
    //Configuration Handlebars
    app.engine('hbs', engine({ 
        defaultLayout: 'main',
        layoutsDir: path.join(__dirname, '../views/layouts'),
        partialsDir: path.join(__dirname,'../views/partials'),
        extname: '.hbs',
    }));
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, '../views'));

    // join dependent directory stay
    //Setup static directory
    app.use(express.static(path.join(__dirname, '../public')));
}
module.exports = configViewEngine;


