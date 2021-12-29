require('dotenv').config();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = (req, res) => {
    console.log('sendMail req.body', req.body)

    const from = {name:"RL Quoting System", email:"edwin.leung2@gmail.com",};
    const to = "edwin.leung2@gmail.com";  
    const subject = "New Quotation Request";  
    const output = `
      <p>You have a new quotation request</p>
      <ul>
        <li>Service: ${req.body.service}</li>
        <li>Category: ${req.body.category}</li>
        <li>Compilation transactions per year: ${req.body.compilationTxn}</li>
        <li>0-50 transactions service: ${req.body.fiftyService}</li>
        <li>50-150 transactions service: ${req.body.oneFiftyService}</li>
        <li>150+ transactions service: ${req.body.oneFiftyPlusService}</li>
        <li>Quoted amount: ${req.body.quote}</li>
        <li>Email: ${req.body.email}</li>               
      </ul>      
    `;

    const msg = {
        to,
        from,
        subject,
        html: output,
    }

    // sgMail.sendMultiple(msg, function (err, result) {
        sgMail.send(msg, function (err, result) {   
        if (err) {
            res.status(400).json('Email Not Sent');
        } else {
            console.log("Email was sent");
            res.json(output);
        }
    });    
};

module.exports = sendMail;