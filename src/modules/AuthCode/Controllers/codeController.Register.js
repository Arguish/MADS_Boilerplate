const Code = require('../Model/codeModel');
const {
    isValidEmail,
    checkMXRecord,
} = require('../../login/Helpers/userHelper');

exports.registerCode = async (req, res) => {
    try {
        const { mail } = req.body;
        isValidEmail(mail);
        await checkMXRecord(mail);

        const codeNumber = randomCode();

        const codeEntry = await Code.create({
            code: codeNumber,
            mail,
        });
        res.status(201).json({
            message: 'Code sended',
            userId: codeEntry._id,
            code: codeNumber,
        });
        deleteCode(codeEntry._id, 120);
    } catch (error) {
        if (error.code == 11000) {
            res.status(500).json({
                message: 'Error: Ya existe un codigo activo para este correo',
                error: error.message,
            });
        } else {
            res.status(500).json({
                message: 'Error:',
                error: error.message,
            });
        }
    }
};

const randomCode = () => {
    return Math.floor(1000 + Math.random() * 9000);
};

const deleteCode = async (id, time) => {
    setTimeout(async () => {
        try {
            const doc = await Code.findByIdAndDelete(id);
            console.log('Eliminado con éxito:', doc);
        } catch (err) {
            console.error('Error al eliminar:', err);
        }
    }, time * 1000);
};
