const jwt = require('jsonwebtoken');
const User = require('../Model/userModel');

exports.isAdmin = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id);
        if (user && user.isAdmin) {
            req.user = user;
            next();
        } else {
            res.status(403).json({
                message: 'Acceso denegado.',
            });
        }
    } catch (error) {
        res.status(401).json({ message: 'No autorizado' });
    }
};

exports.isAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'No autorizado' });
    }
};
