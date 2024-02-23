const User = require('../Model/userModel');
const {
    hashPasword,
    isValidEmail,
    checkMXRecord,
} = require('../Helpers/userHelper');

exports.updateUser = async (req, res) => {
    try {
        const { mail } = req.body;
        if (mail && !isValidEmail(mail)) {
            return res.status(400).json({
                message: 'El correo no es válido',
            });
        }
        if (mail) {
            await checkMXRecord(mail);
        }
        const { password } = req.body;
        if (password) {
            req.body.password = await hashPasword(password);
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({
                message: 'Usuario no encontrado',
            });
        }
        const resUser = updatedUser._id;
        res.status(200).json(resUser);
    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar el usuario',
            error: error.message,
        });
    }
};
