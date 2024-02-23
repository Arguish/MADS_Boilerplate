
const express = require('express');
const router = express.Router();

const { createTESTING } = require('../Controllers/Controller.TESTING.Create.js');
const { readTESTING, readAllTESTING } = require('../Controllers/Controller.TESTING.Read.js');
const { updateTESTING } = require('../Controllers/Controller.TESTING.Update.js');
const { deleteTESTING } = require('../Controllers/Controller.TESTING.Delete.js');

router.post('/create', createTESTING);
router.get('/all', readAllTESTING);
router.get('/:id', readTESTING);
router.put('/:id', updateTESTING);
router.delete('/:id', deleteTESTING);

module.exports = router;
