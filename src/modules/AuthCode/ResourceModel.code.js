const codeRoutes = require('./Routes/codeRoutes');

// Ejemplo de una clase en JavaScript

class Login {
    constructor() {
        this.url = '/code';
        this.router = codeRoutes;
    }

    // Método de instancia
    getRouter() {
        return this.router;
    }
}

// Exportando la clase
module.exports = Login;
