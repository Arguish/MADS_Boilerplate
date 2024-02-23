
const TESTING = require('../Models/Model.TESTING.js');

exports.updateTESTING = async (req, res) => {
    try {
        const updatedTESTING = await TESTING.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedTESTING) {
            return res.status(404).json({
                message: 'TESTING entry not found',
            });
        }
        const resTESTING = updatedTESTING._id;
        res.status(200).json(resTESTING);
    } catch (error) {
        res.status(500).json({
            message: 'Error updating TESTING entry',
            error: error.message,
        });
    }
};
            
            