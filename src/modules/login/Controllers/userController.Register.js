const User = require('../Model/userModel');
const {
    hashPasword,
    isValidEmail,
    checkMXRecord,
    generateToken,
} = require('../Helpers/userHelper');

exports.registerUser = async (req, res) => {
    try {
        const { username, mail, password } = req.body;
        isValidEmail(mail);
        await checkMXRecord(mail);
        const hashedPassword = await hashPasword(password);
        const user = await User.create({
            username,
            mail,
            password: hashedPassword,
        });
        const token = generateToken(user);

        res.status(201).json({
            message: 'User created successfully',
            token,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error registering new user',
            error: error.message,
        });
    }
};
