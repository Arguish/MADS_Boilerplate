const express = require('express');
const router = express.Router();
const { registerUser } = require('../Controllers/userController.Register.js');
const { loginUser } = require('../Controllers/userController.Login.js');
const {
    getAllUsers,
    getUserById,
} = require('../Controllers/userController.Get.js');
const { updateUser } = require('../Controllers/userController.Update.js');
const { deleteUser } = require('../Controllers/userController.Delete.js');
const { isAuth, isAdmin } = require('../Middleware/Auth.js');

// Rutas para usuarios
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/all', isAuth, isAdmin, getAllUsers);
router.get('/:id', isAuth, getUserById);
router.put('/:id', isAuth, updateUser);
router.delete('/:id', isAuth, deleteUser);

module.exports = router;
