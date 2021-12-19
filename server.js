require('dotenv').config();

const path = require('path')

const express = require('express');
const app = express();

const sendMail = require('./utils/sendMail');

const log = console.log;

app.use(express.urlencoded({extended: false}));
app.use('/public', express.static(path.join(__dirname, 'public')))

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("contact");
});

app.get("/sent", (req, res) => {
    res.render("sent");
});

app.post("/sendmail", (req, res) => {
    const { name, surname, email } = req.body;
  
    const from = {name:"RL Quoting System", email:"edwin.leung2@gmail.com",};
    const to = "edwin.leung2@gmail.com";
  
    const subject = "New Quotation Request";
  
    const output = `
      <p>You have a new quotation request</p>
      <h3>Service Selections</h3>
      <ul>
        <li>Service: ${service}</li>
        <li>Category: ${category}</li>
        <li>compilation-txn: ${compilation-txn}</li>
        <li>Email: ${email}</li>
      </ul>
    `;
  
    sendMail(to, from, subject, output);
    res.redirect("/sent");
  });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    log(`Server running on port ${PORT}`);
});
