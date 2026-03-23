const mongoose = require('mongoose');

const parceiroSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    // Add other fields as necessary
});

module.exports = mongoose.model('Parceiro', parceiroSchema);
