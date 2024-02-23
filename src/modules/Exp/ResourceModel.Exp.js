const expRoutes = require('./Routes/expRoutes.js');

// Ejemplo de una clase en JavaScript

class Exp {
    constructor() {
        this.url = '/exp';
        this.router = expRoutes;
    }

    // Método de instancia
    getRouter() {
        return this.router;
    }
}

// Exportando la clase
module.exports = Exp;
