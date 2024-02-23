const Project = require('../Model/Model.Project.js');

exports.updateProjectAndTechnologies = async (req, res) => {
    const { id } = req.params; // ID del proyecto a actualizar
    const projectUpdates = req.body; // El objeto completo del proyecto con las actualizaciones incluidas

    try {
        // Actualiza el proyecto y sus tecnologías en una sola operación
        const updatedProject = await Project.findByIdAndUpdate(
            id,
            projectUpdates
        );

        if (!updatedProject) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }

        res.status(200).json({
            message: 'Proyecto y tecnologías actualizadas con éxito',
            project: updatedProject,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar el proyecto y sus tecnologías',
            error: error.message,
        });
    }
};
