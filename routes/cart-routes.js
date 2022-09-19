var express = require('express');
var router = express.Router();
var { getCart } = require('../controllers/cart-controller')

router.get('/', getCart);

module.exports = router;