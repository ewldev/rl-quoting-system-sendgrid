require('dotenv').config()
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
    to: "edwin.leung2@gmail.com",
    from: "edwin.leung2@gmail.com",
    subject: "Sendgrid test send",
    text: "Sendgrid send mail testing",
    html: "<strong>Sendgrid send mail testing</strong>",
}
sgMail.send(msg);