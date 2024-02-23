const fs = require('fs');
const path = require('path');
const templates = require('./moduleTemplate');

const moduleName = process.argv[2];

if (!moduleName) {
    console.error('Por favor, especifica el nombre del módulo');
    process.exit(1);
}

const modulePath = path.join(__dirname, '..', '..', 'modules', moduleName);

if (!fs.existsSync(modulePath)) {
    fs.mkdirSync(modulePath, { recursive: true });

    const filesContents = templates(moduleName);

    filesContents.forEach((file) => {
        const fullPath = path.join(modulePath, file.name);
        const dirPath = path.dirname(fullPath);

        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        fs.writeFileSync(fullPath, file.content);
    });

    console.log(`Módulo ${moduleName} creado exitosamente`);
} else {
    console.error(`El módulo ${moduleName} ya existe`);
}
