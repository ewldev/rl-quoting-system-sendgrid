require('dotenv').config();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = (to, from, subject, text) => {
    const msg = {
        to,
        from,
        subject,
        html: text,
    }

    // sgMail.sendMultiple(msg, function (err, result) {
        sgMail.send(msg, function (err, result) {   
        if (err) {
            console.log("Email Not Sent");
        } else {
            console.log("Email was sent");
        }
    });    
};

module.exports = sendMail;