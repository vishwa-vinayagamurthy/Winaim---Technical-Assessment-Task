const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false, 
  auth: {
    user: 'your-email-username',
    pass: 'your-email-password'
  }
});

const emailTemplate = (username, password) => {
  return `
    <h2>Welcome to our clinic!</h2>
    <p>Your account has been successfully created.</p>
    <p>Your username is: ${username}</p>
    <p>Your default password is: ${password}</p>
    <p>Please change your password as soon as possible.</p>
    <p>Best regards,</p>
    <p>Clinic Team</p>
  `;
};

app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  const username = email;
  const defaultPassword = 'Change@123';

  const mailOptions = {
    from: 'your-email-username',
    to: email,
    subject: 'Welcome to our clinic!',
    html: emailTemplate(username, defaultPassword)
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email sent: ' + info.response);
    res.send('Signup successful! Please check your email for login credentials.');
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
