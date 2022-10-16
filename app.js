var createError = require('http-errors')
const express = require('express');
var cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config();

var indexRouter = require('./routes/login-routes');
var mainRouter = require('./routes/main-routes');
var catalogRouter = require('./routes/catalog-routes');
var cartRouter = require('./routes/cart-routes');
var goodsRouter = require('./routes/goods-routes');
var registrationRouter = require('./routes/registration-routes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


function auth (req, res, next) {

    if(!req.cookies.userId) {
        res.render('error', {cap: "Authorize is failing , please Re-Log in:"});
    };
    next()

 };


app.use('/registration', registrationRouter);
app.use('/', indexRouter);
app.use(auth);
app.use('/main', mainRouter);
app.use('/catalog', catalogRouter);
app.use('/cart', cartRouter);
app.use('/goods', goodsRouter);



module.exports = app;
