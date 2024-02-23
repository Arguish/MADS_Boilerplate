exports.Mail = (subject, body, destinatary) => {
    const mail = {
        from: 'Javier Hernandez <onboarding@resend.dev>',
        to: destinatary,
        subject: subject,
        html: body,
    };
    return mail;
};
