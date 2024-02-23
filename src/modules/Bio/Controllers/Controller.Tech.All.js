const Tech = require('../Model/Model.Tech.js');

exports.allTech = async (req, res) => {
    try {
        const Techs = await Tech.find({});
        res.status(200).json(Techs);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener las Tecnologías',
            error: error.message,
        });
    }
};
exports.getTechById = async (req, res) => {
    try {
        const techId = req.params.id;
        const tech = await Tech.findById(techId);

        if (!tech) {
            return res.status(404).json({
                message: 'Tecnología no encontrada',
            });
        }

        res.status(200).json(tech);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener la Tecnología',
            error: error.message,
        });
    }
};
