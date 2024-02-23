const Tech = require('../Model/Model.Tech.js');

exports.addTech = async (req, res) => {
    try {
        const { domain, name } = req.body;

        const TechEntry = await Tech.create({
            name,
            domain,
        });

        res.status(201).json({
            message: 'OK',
            TechId: TechEntry._id,
        });
    } catch (error) {
        if ((error.code = 11000)) {
            res.status(200).json({
                message: 'Error de duplicidad',
            });
        } else {
            res.status(500).json({
                message: 'Error:',
                error: error.message,
            });
        }
    }
};
