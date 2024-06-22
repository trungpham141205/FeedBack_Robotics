const express = require('express');
const { getFormPage } = require('../controllers/feedbackController');
const router = express.Router();

router.get('/', getFormPage);

module.exports = router;