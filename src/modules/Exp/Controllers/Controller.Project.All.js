const Project = require('../Model/Model.Project.js');

exports.allProjects = async (req, res) => {
    try {
        const projects = await Project.find({});
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los Proyectos',
            error: error.message,
        });
    }
};
