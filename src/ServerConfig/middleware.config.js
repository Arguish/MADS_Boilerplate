const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const allowedOrigins = [process.env.LOCALHOST, process.env.FRONT]; // Asegúrate de que esta variable está definida en tu .env

const mConfig = () => {
    return [
        express.json(),
        morgan('dev'),
        cors({
            // Aquí pasas directamente la función que maneja la lógica CORS
            origin: (origin, callback) => {
                // permitir solicitudes sin origen (como aplicaciones móviles o curl)
                if (!origin) return callback(null, true);
                if (allowedOrigins.indexOf(origin) === -1) {
                    var msg =
                        'La política CORS para este sitio no permite el acceso desde el origen especificado.';
                    return callback(new Error(msg), false);
                }
                return callback(null, true);
            },
        }),
    ];
};

module.exports = mConfig;
