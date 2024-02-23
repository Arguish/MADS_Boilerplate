const mongoose = require('mongoose');

// Función para conectar a MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Conectado a MongoDB Atlas');
    } catch (error) {
        console.error('Error conectando a MongoDB:', error);
        process.exit(1); // Detiene la aplicación con un error
    }
};

// Exporta la función connectDB
module.exports = connectDB;
