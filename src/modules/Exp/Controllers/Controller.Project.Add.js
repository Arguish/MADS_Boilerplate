const Project = require('../Model/Model.Project.js');

exports.addProject = async (req, res) => {
    try {
        // Asume que req.body ya contiene toda la información necesaria para crear un proyecto,
        // incluidos title, description, imageUrl, y technologies.
        const { title, description, imageUrl, technologies } = req.body;

        const projectEntry = await Project.create({
            title,
            description,
            imageUrl,
            technologies, // Esto debe ser un array de objetos, cada uno con name y color
        });

        res.status(201).json({
            message: 'Proyecto añadido con éxito',
            projectId: projectEntry._id,
        });
    } catch (error) {
        if (error.code === 11000) {
            // Aquí se maneja el error de duplicidad para campos únicos en el esquema
            res.status(409).json({
                // 409 Conflicto
                message: 'Error de duplicidad',
            });
        } else {
            // Otros errores (por ejemplo, validación fallida)
            res.status(500).json({
                message: 'Error al crear el proyecto',
                error: error.message,
            });
        }
    }
};
