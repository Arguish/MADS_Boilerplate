// src/commands/createModule/moduleTemplates.js
const templates = (moduleName) => {
    return [
        {
            name: `Controllers/Controller.${moduleName}.Create.js`,
            content: `
const ${moduleName} = require('../Models/Model.${moduleName}.js');

exports.create${moduleName} = async (req, res) => {
    try {
        const { domain, name } = req.body;

        const ${moduleName}Entry = await ${moduleName}.create({
            name,
        });

        res.status(201).json({
            message: '${moduleName} entry created',
            ${moduleName}Id: ${moduleName}Entry._id,
        });
    } catch (error) {
        if ((error.code = 11000)) {
            res.status(200).json({
                message: 'Error: ${moduleName} entry already exist',
            });
        } else {
            res.status(500).json({
                message: 'Error creating ${moduleName} entry:',
                error: error.message,
            });
        }
    }
};

            `,
        },
        {
            name: `Controllers/Controller.${moduleName}.Read.js`,
            content: `
const ${moduleName} = require('../Models/Model.${moduleName}.js');

exports.readAll${moduleName} = async (req, res) => {
    try {
        const ${moduleName}All = await ${moduleName}.find({});
        res.status(200).json(${moduleName}All);
    } catch (error) {
        res.status(500).json({
            message: 'Error reading all ${moduleName} entries',
            error: error.message,
        });
    }
};

exports.read${moduleName} = async (req, res) => {
    try {
        const ${moduleName}Id = req.params.id;
        const res${moduleName} = await ${moduleName}.findById(${moduleName}Id);

        if (!res${moduleName}) {
            return res.status(404).json({
                message: '${moduleName} entry not found',
            });
        }

        res.status(200).json(res${moduleName});
    } catch (error) {
        res.status(500).json({
            message: 'Error reading ${moduleName} entry',
            error: error.message,
        });
    }
};
            `,
        },
        {
            name: `Controllers/Controller.${moduleName}.Update.js`,
            content: `
const ${moduleName} = require('../Models/Model.${moduleName}.js');

exports.update${moduleName} = async (req, res) => {
    try {
        const updated${moduleName} = await ${moduleName}.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updated${moduleName}) {
            return res.status(404).json({
                message: '${moduleName} entry not found',
            });
        }
        const res${moduleName} = updated${moduleName}._id;
        res.status(200).json(res${moduleName});
    } catch (error) {
        res.status(500).json({
            message: 'Error updating ${moduleName} entry',
            error: error.message,
        });
    }
};
            
            `,
        },
        {
            name: `Controllers/Controller.${moduleName}.Delete.js`,
            content: `
const ${moduleName} = require('../Models/Model.${moduleName}.js');

exports.delete${moduleName} = async (req, res) => {
    try {
        await ${moduleName}.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: '${moduleName} entry deleted' });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting ${moduleName} entry',
            error: error.message,
        });
    }
};
            
            `,
        },
        {
            name: `Models/Model.${moduleName}.js`,
            content: `
const mongoose = require('mongoose');

const ${moduleName}Schema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    });

module.exports = mongoose.model('${moduleName}', ${moduleName}Schema);

`,
        },
        {
            name: `Routes/Route.${moduleName}.js`,
            content: `
const express = require('express');
const router = express.Router();

const { create${moduleName} } = require('../Controllers/Controller.${moduleName}.Create.js');
const { read${moduleName}, readAll${moduleName} } = require('../Controllers/Controller.${moduleName}.Read.js');
const { update${moduleName} } = require('../Controllers/Controller.${moduleName}.Update.js');
const { delete${moduleName} } = require('../Controllers/Controller.${moduleName}.Delete.js');

router.post('/create', create${moduleName});
router.get('/all', readAll${moduleName});
router.get('/:id', read${moduleName});
router.put('/:id', update${moduleName});
router.delete('/:id', delete${moduleName});

module.exports = router;
`,
        },
        {
            name: `ResourceModel.${moduleName}.js`,
            content: `
const Routes = require('./Routes/Route.${moduleName}.js');

class ${moduleName} {
    constructor() {
        this.url = '/${moduleName.toLowerCase()}';
        this.router = Routes;
    }

    getRouter() {
        return this.router;
    }
}

module.exports = ${moduleName};`,
        },
    ];
};
module.exports = templates;
