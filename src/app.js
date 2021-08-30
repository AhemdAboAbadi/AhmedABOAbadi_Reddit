require('env2')('.env');

const { join } = require('path');
const express = require('express');
const compression = require('compression');
const cookie = require('cookie-parser');

const router = require('./router');

const app = express();

app.disabled('x-powered-by');
app.use(cookie());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(express.json());
app.use(express.static(join(__dirname, '..', 'public')));

app.set('port', process.env.PORT || 4000);

app.use(router);

module.exports = app;
