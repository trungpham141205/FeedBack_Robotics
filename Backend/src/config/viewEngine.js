const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');

const configViewEngine = (app) => {
    //Configuration Handlebars
    app.engine('hbs', engine({ extname: '.hbs' }));
    app.set('view engine', 'hbs');
    app.set('views', path.join('./src', 'resources', 'views'));

    // join dependent directory stay
    //Setup static directory
    app.use(express.static(path.join('./src', 'public')));
}

module.exports = configViewEngine;