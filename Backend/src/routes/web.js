const express = require('express');
const { getHomePage } = require('../controllers/homeController');
const { getFormPage } = require('../controllers/feedbackController');
const router = express.Router();

router.get('/', getHomePage);

module.exports = router;