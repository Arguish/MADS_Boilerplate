// Ejemplo de userGetController.js
const User = require('../Model/userModel');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los usuarios',
            error: error.message,
        });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener el usuario',
            error: error.message,
        });
    }
};
