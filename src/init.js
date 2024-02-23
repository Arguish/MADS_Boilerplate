require('dotenv').config();
const configApp = require('./ServerConfig/app.config');
const conectDB = require('./ServerConfig/mongoose.config');
const sendMail = require('./modules/MailSender/Controllers/mailControler.Send');

const PORT = process.env.PORT || 3000;
const app = configApp(PORT);

// Conexión a MongoDB
conectDB();
