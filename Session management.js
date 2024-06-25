const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'my_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
}));
