
const mongoose = require('mongoose');

const TESTINGSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    });

module.exports = mongoose.model('TESTING', TESTINGSchema);

