const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    phone: { type: Number, required: true },
    mail: { type: String, required: true, unique: true },
    name: { type: String, required: true },
});

module.exports = mongoose.model('Contact', contactSchema);
