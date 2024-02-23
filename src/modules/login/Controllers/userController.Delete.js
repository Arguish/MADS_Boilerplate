// Ejemplo de userDeleteController.js
const User = require('../Model/userModel');

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar el usuario',
            error: error.message,
        });
    }
};
