const bioRoutes = require('./Routes/bioRoutes.js');

// Ejemplo de una clase en JavaScript

class Bio {
    constructor() {
        this.url = '/bio';
        this.router = bioRoutes;
    }

    // Método de instancia
    getRouter() {
        return this.router;
    }
}

// Exportando la clase
module.exports = Bio;
