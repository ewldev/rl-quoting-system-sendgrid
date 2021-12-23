require('dotenv').config();

const path = require('path')

const express = require('express');
const app = express();

const sendMail = require('./utils/sendMail');
// const calculate = require('./utils/calculate');

app.use(express.json());

app.use(express.urlencoded({extended: false}));
app.use('/public', express.static(path.join(__dirname, 'public')))

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("contact");
});

app.get("/sent", (req, res) => {
  // console.log('get body.service', res.body.service)
  res.render("sent");
})

app.post("/sendmail", (req, res) => {sendMail (req, res)});
    
  
  //   sendMail(to, from, subject, output);
    
  // });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

