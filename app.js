const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const decoderAndAuth = require('./middleware/mid_decoderAndAuth')
require('dotenv').config();

var indexRouter = require('./routes/login-routes');
var mainRouter = require('./routes/main-routes');
var catalogRouter = require('./routes/catalog-routes');
var cartRouter = require('./routes/cart-routes');
var goodsRouter = require('./routes/goods-routes');
var registrationRouter = require('./routes/registration-routes');
var accountRouter = require('./routes/account-routes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/registration', registrationRouter);
app.use('/', indexRouter);
app.use('/goods', goodsRouter);
app.use('/main', mainRouter);
app.use('/catalog', catalogRouter);
app.use(decoderAndAuth);
app.use('/cart', cartRouter);
app.use('/account', accountRouter);

module.exports = app;
