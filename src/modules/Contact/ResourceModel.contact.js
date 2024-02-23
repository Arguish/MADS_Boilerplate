const contactRoutes = require('./Routes/contactRoutes');

// Ejemplo de una clase en JavaScript

class Login {
    constructor() {
        this.url = '/contact';
        this.router = contactRoutes;
    }

    // Método de instancia
    getRouter() {
        return this.router;
    }
}

// Exportando la clase
module.exports = Login;
