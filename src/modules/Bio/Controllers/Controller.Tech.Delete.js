const Tech = require('../Model/Model.Tech.js');

exports.deleteTech = async (req, res) => {
    try {
        await Tech.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Tecnología eliminada' });
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar Tecnología',
            error: error.message,
        });
    }
};
