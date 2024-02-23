const User = require('../Model/userModel');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../Helpers/userHelper');

exports.loginUser = async (req, res) => {
    try {
        const { mail, password } = req.body;

        const user = await User.findOne({ mail });
        if (!user) {
            return res.status(400).send('Usuario no encontrado');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Contraseña incorrecta');
        }

        const token = generateToken(user);

        res.json({ message: 'Login exitoso', token });
    } catch (error) {
        res.status(500).json({
            message: 'Error al iniciar sesión',
            error: error.message,
        });
    }
};
