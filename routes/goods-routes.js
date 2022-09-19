var express = require('express');
var router = express.Router();
var { getGoods } = require('../controllers/goods-controller')

router.get('/', getGoods);

module.exports = router;