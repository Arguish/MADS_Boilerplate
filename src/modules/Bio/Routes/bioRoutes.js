const express = require('express');
const router = express.Router();
const { isAuth, isAdmin } = require('../../login/Middleware/Auth.js');

const { addTech } = require('../Controllers/Controller.Tech.Add.js');
const { allTech } = require('../Controllers/Controller.Tech.All.js');
const { updateTech } = require('../Controllers/Controller.Tech.Update.js');
const { deleteTech } = require('../Controllers/Controller.Tech.Delete.js');

router.post('/add', isAuth, isAdmin, addTech);
router.get('/all', allTech);
router.put('/:id', isAuth, isAdmin, updateTech);
router.delete('/:id', isAuth, isAdmin, deleteTech);

module.exports = router;
