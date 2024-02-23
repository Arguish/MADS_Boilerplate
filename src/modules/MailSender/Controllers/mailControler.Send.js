const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async (mailObject) => {
    const { data, err } = await resend.emails.send({
        from: mailObject.from,
        to: [mailObject.to],
        subject: mailObject.subject,
        text: mailObject.text ?? '',
        html: mailObject.html ?? '',
    });
    if (err) {
        console.error('Error:', { err });
    }
    console.log('OK: ', { data });
};

module.exports = sendMail;
