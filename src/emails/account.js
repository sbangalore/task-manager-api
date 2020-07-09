const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'bsudarshan@outlook.com',
        subject: 'Thanks for joining.',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendRetentionEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'bsudarshan@outlook.com',
        subject: 'Sorry to see you go.',
        text: `Thanks for trusting us with your time, ${name}.
                Can you send us a quick reply with why you cancelled?
                Thanks again.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendRetentionEmail
}