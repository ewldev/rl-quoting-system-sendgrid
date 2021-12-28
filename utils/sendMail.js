require('dotenv').config();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = (req, res) => {
    // const { service, category, compilationTxn, fiftyService, oneFiftyService, oneFiftyPlusService, quote, email } = req.body;
    console.log('service.value sendMail',req.body)
    
    const from = {name:"RL Quoting System", email:"edwin.leung2@gmail.com",};
    const to = "edwin.leung2@gmail.com";
  
    const subject = "New Quotation Request";
  
    const output = `
      <p>You have a new quotation request</p>
      <h3>Service Selections</h3>
      <ul>
        <li>Service: ${req.body.service}</li>
        <li>Category: ${req.body.category}</li>
        <li>Compilation Transactions: ${req.body.compilationTxn}</li>
        <li>50 transactions service: ${req.body.fiftyService}</li>
        <li>150 transactions service: ${req.body.oneFiftyService}</li>
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
            // console.log("Email Not Sent");
            res.status(400).json('Email Not Sent');
        } else {
            
            console.log("Email was sent");
            
            res.json(output);
        }
    });    
};

module.exports = sendMail;