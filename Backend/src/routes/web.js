const express = require('express');
const { getFormPage, getHomePage } = require('../controllers/feedbackController');
const router = express.Router();

router.get('/', getFormPage);
router.get('/home', getHomePage);

module.exports = router;