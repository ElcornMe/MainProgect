const express = require('express');

const router = express.Router();
const { getCart } = require('../controllers/cart-controller');

router.get('/', getCart);

module.exports = router;
