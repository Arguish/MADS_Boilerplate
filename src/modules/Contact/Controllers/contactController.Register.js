const Contact = require('../Model/contactModel.js');
const {
    isValidEmail,
    checkMXRecord,
} = require('../../login/Helpers/userHelper');
const sendMail = require('../../MailSender/Controllers/mailControler.Send.js');
const { Mail } = require('../../MailSender/Templates/Mail.template.js');

exports.registerContact = async (req, res) => {
    try {
        const { mail, phone, name, text } = req.body;
        isValidEmail(mail);
        await checkMXRecord(mail);

        const contactEntry = await Contact.create({
            phone,
            name,
            mail,
        });

        sendMail(
            Mail(
                `${name} quiere contactar.`,
                `<ul>
    <li>Telefono: ${phone}</li>
    <li>Correo: ${mail}</li>
    <li>Asunto: ${text}</li>
    </ul>`,
                process.env.MAIL
            )
        );

        res.status(201).json({
            message: 'Code sended',
            userId: contactEntry._id,
        });
    } catch (error) {
        if ((error.code = 11000)) {
            res.status(200).json({
                message:
                    'Ya existe una solicitud anterior, sera conteactado con la mayor brevedad posible',
            });
        } else {
            res.status(500).json({
                message: 'Error:',
                error: error.message,
            });
        }
    }
};
