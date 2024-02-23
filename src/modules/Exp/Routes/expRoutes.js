const express = require('express');
const router = express.Router();
const { isAuth, isAdmin } = require('../../login/Middleware/Auth.js');

const { addProject } = require('../Controllers/Controller.Project.Add.js');
const { allProjects } = require('../Controllers/Controller.Project.All.js');
const {
    updateProjectAndTechnologies,
} = require('../Controllers/Controller.Project.Update.js');
const {
    deleteProject,
} = require('../Controllers/Controller.Project.Delete.js');

router.post('/add', isAuth, isAdmin, addProject);
router.get('/all', allProjects);
router.put('/:id', isAuth, isAdmin, updateProjectAndTechnologies);
router.delete('/:id', isAuth, isAdmin, deleteProject);

module.exports = router;
