const express = require('express');
const router = express.Router();
const { registerCode } = require('../Controllers/codeController.Register.js');
const { getUserByMail } = require('../Controllers/codeController.Get.js');

router.post('/send', registerCode);
router.post('/check', getUserByMail);

module.exports = router;
