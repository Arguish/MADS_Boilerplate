
const TESTING = require('../Models/Model.TESTING.js');

exports.readAllTESTING = async (req, res) => {
    try {
        const TESTINGAll = await TESTING.find({});
        res.status(200).json(TESTINGAll);
    } catch (error) {
        res.status(500).json({
            message: 'Error reading all TESTING entries',
            error: error.message,
        });
    }
};

exports.readTESTING = async (req, res) => {
    try {
        const TESTINGId = req.params.id;
        const resTESTING = await TESTING.findById(TESTINGId);

        if (!resTESTING) {
            return res.status(404).json({
                message: 'TESTING entry not found',
            });
        }

        res.status(200).json(resTESTING);
    } catch (error) {
        res.status(500).json({
            message: 'Error reading TESTING entry',
            error: error.message,
        });
    }
};
            