const dns = require('dns');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const hashPasword = (password) => {
    return bcrypt.hash(password, 12);
};

const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regex.test(email)) {
        throw new Error('El correo no es valido');
    }
    return true;
};

const checkMXRecord = (email) => {
    return new Promise((resolve, reject) => {
        const domain = email.split('@')[1];
        dns.resolveMx(domain, (err, addresses) => {
            if (err) {
                reject(new Error(`Existe algun problema con: ${domain}`));
            } else if (addresses && addresses.length > 0) {
                console.log(`Registros MX encontrados para ${domain}:`);
                addresses.forEach((mx) =>
                    console.log(
                        `Prioridad: ${mx.priority}, Host: ${mx.exchange}`
                    )
                );
                resolve(true);
            } else {
                reject(new Error(`Existe algun problema con: ${domain}.`));
            }
        });
    });
};

const generateToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
};

module.exports = { hashPasword, isValidEmail, checkMXRecord, generateToken };
