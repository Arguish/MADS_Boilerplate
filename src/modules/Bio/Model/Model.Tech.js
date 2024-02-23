const mongoose = require('mongoose');

const TechSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    domain: { type: String, required: true },
});

module.exports = mongoose.model('Tech', TechSchema);
