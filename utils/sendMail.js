require('dotenv').config();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = (req, res) => {
    const { service, category, compilationTxn, fiftyService, oneFiftyService, oneFiftyPlusService, quote, email } = req.body;
    console.log('req.body',req.body)

    
    const from = {name:"RL Quoting System", email:"edwin.leung2@gmail.com",};
    const to = "edwin.leung2@gmail.com";
  
    const subject = "New Quotation Request";
  
    const output = `
      <p>You have a new quotation request</p>
      <h3>Service Selections</h3>
      <ul>
        <li>Service: ${service}</li>
        <li>Category: ${category}</li>
        <li>Compilation Transactions ${compilationTxn}</li>
        <li>50 transactions service ${fiftyService}</li>
        <li>150 transactions service ${oneFiftyService}</li>
        <li>150+ transactions service ${oneFiftyPlusService}</li>
        <li>Quote: ${quote}</li>        
        <li>Email: ${email}</li>
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
            // console.log("Email Not Sent");
            res.status(400).json('Email Not Sent');
        } else {
            
            console.log("Email was sent");
            
            res.json(output);
        }
    });    
};

module.exports = sendMail;