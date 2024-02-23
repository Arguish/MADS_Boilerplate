exports.SimpleMail = (subject, body, destinatary) => {
    const mail = {
        from: 'Javier Hernandez <onboarding@resend.dev>',
        to: destinatary,
        subject: subject,
        html: `<p>${body}</p>`,
    };
    return mail;
};
