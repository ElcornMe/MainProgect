const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const decodeToken = require('./middleware/decodeToken');
const permit = require('./middleware/checkRole');
const checkAuth = require('./middleware/checkAuth');
require('dotenv').config();

const indexRouter = require('./routes/login-routes');
const mainRouter = require('./routes/main-routes');
const catalogRouter = require('./routes/catalog-routes');
const cartRouter = require('./routes/cart-routes');
const goodsRouter = require('./routes/goods-routes');
const registrationRouter = require('./routes/registration-routes');
const accountRouter = require('./routes/account-routes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/registration', registrationRouter);
app.use('/', indexRouter);
app.use(decodeToken);
app.use('/goods', goodsRouter);
app.use('/main', mainRouter);
app.use('/catalog', permit(4, 1), catalogRouter);
app.use(checkAuth);
app.use('/cart', cartRouter);
app.use('/account', accountRouter);

module.exports = app;
