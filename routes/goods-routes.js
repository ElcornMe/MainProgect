const express = require('express');

const router = express.Router();
const { getGoods } = require('../controllers/goods-controller');

router.get('/', getGoods);

module.exports = router;
