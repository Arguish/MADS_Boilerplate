const Project = require('../Model/Model.Project.js');

exports.deleteProject = async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Proyecto eliminado con éxito.' });
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar el proyecto.',
            error: error.message,
        });
    }
};
