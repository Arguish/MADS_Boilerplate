
const Routes = require('./Routes/Route.TESTING.js');

class TESTING {
    constructor() {
        this.url = '/testing';
        this.router = Routes;
    }

    getRouter() {
        return this.router;
    }
}

module.exports = TESTING;