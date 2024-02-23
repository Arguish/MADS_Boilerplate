const express = require('express');
const router = express.Router();
const {
    registerContact,
} = require('../Controllers/contactController.Register.js');

router.post('/send', registerContact);

module.exports = router;
