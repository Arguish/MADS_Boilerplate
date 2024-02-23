
const TESTING = require('../Models/Model.TESTING.js');

exports.deleteTESTING = async (req, res) => {
    try {
        await TESTING.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'TESTING entry deleted' });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting TESTING entry',
            error: error.message,
        });
    }
};
            
            