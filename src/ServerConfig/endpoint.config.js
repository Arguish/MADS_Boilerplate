const fs = require('fs');
const path = require('path');

const endpointConfig = (
    app,
    modulesDir = path.join(__dirname, '..', 'modules')
) => {
    const files = getFiles(modulesDir);

    files.forEach((file) => {
        if (file.isDirectory()) {
            endpointConfig(app, path.join(modulesDir, file.name));
        } else if (riquiredFile(file)) {
            const moduleClass = inicialiceModule(modulesDir, file);
            inicialiceEndpoint(moduleClass, app);
        }
    });
};

module.exports = endpointConfig;

const riquiredFile = (file) => {
    const resourceModelRegex = /^ResourceModel\..+\.js$/;
    return resourceModelRegex.test(file.name);
};

const inicialiceModule = (modulesDir, file) => {
    const ResourceModelClass = require(path.join(modulesDir, file.name));
    console.log(`Encontrado: ${file.name}`);
    return new ResourceModelClass();
};

const getFiles = (modulesDir) => {
    return fs.readdirSync(modulesDir, { withFileTypes: true });
};

const inicialiceEndpoint = (moduleClass, app) => {
    try {
        app.use(moduleClass.url, moduleClass.getRouter());
    } catch (error) {
        console.error('Error inicializando Endpoint\n', error);
    }
};
