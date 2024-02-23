const Code = require('../Model/codeModel');
const {
    isValidEmail,
    checkMXRecord,
} = require('../../login/Helpers/userHelper');

exports.getUserByMail = async (req, res) => {
    try {
        const { mail, code } = req.body;
        isValidEmail(mail);

        const codeEntry = await Code.findOneAndDelete({
            mail,
            code,
        });
        console.log(codeEntry);

        if (codeEntry)
            res.status(201).json({
                message: 'OK',
            });
        else {
            throw new Error('Codigo o mail incorrectos');
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error:',
            error: error.message,
        });
    }
};
