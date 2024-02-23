const userRoutes = require('./Routes/userRoutes');

// Ejemplo de una clase en JavaScript

class Login {
    constructor() {
        this.url = '/user';
        this.router = userRoutes;
    }

    // Método de instancia
    getRouter() {
        return this.router;
    }
}

// Exportando la clase
module.exports = Login;
