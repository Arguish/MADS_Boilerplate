
const TESTING = require('../Models/Model.TESTING.js');

exports.createTESTING = async (req, res) => {
    try {
        const { domain, name } = req.body;

        const TESTINGEntry = await TESTING.create({
            name,
        });

        res.status(201).json({
            message: 'TESTING entry created',
            TESTINGId: TESTINGEntry._id,
        });
    } catch (error) {
        if ((error.code = 11000)) {
            res.status(200).json({
                message: 'Error: TESTING entry already exist',
            });
        } else {
            res.status(500).json({
                message: 'Error creating TESTING entry:',
                error: error.message,
            });
        }
    }
};

            