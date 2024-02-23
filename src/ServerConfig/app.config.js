const express = require('express');
const mConfig = require('./middleware.config');
const endpointConfig = require('./endpoint.config');

const configApp = async (PORT) => {
    const app = express();

    mConfig().forEach((m) => {
        app.use(m);
    });

    // Rutas
    app.get('/', (req, res) => {
        res.send('Estoy Despierto (=w=){zzz...)');
    });

    endpointConfig(app);

    // Iniciar el servidor
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en puerto:${PORT}`);
    });
    return app;
};

module.exports = configApp;
