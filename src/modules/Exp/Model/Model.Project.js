const mongoose = require('mongoose');

// Define un esquema para las tecnologías
const TechnologySchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
});

// Ajusta tu esquema principal para incluir un array de tecnologías
const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    technologies: [TechnologySchema], // Este campo es un array que sigue el esquema de Technology
});

module.exports = mongoose.model('Project', ProjectSchema);
