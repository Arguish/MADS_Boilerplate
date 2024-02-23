const Tech = require('../Model/Model.Tech.js');

exports.updateTech = async (req, res) => {
    try {
        const updatedTech = await Tech.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedTech) {
            return res.status(404).json({
                message: 'Usuario no encontrado',
            });
        }
        const resTech = updatedTech._id;
        res.status(200).json(resTech);
    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar el usuario',
            error: error.message,
        });
    }
};
