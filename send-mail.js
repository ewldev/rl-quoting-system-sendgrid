require('dotenv').config()
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
    to: "edwin.leung2@gmail.com",
    from: "edwin.leung2@gmail.com",
    subject: "Sendgrid test send3",
    text: "Sendgrid send mail testing",
    html: "<strong>Sendgrid send mail testing 3</strong>",
}

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

//   sgMail
//   .send(msg)
//   .then(() => {}, error => {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body)
//     }
//   });