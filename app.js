const express = require('express');
const path = require('path');
const logger = require('morgan');
require('dotenv').config()

var indexRouter = require('./routes/index');

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/', indexRouter);

module.exports = app;
