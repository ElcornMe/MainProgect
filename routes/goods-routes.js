const express = require('express');

const router = express.Router();
const {
  getGoods, addProducts, updateProductInfo, deleteProduct,
} = require('../controllers/goods-controller');

router.get('/', getGoods);
router.post('/', addProducts);
router.delete('/', deleteProduct);
router.put('/', updateProductInfo);

module.exports = router;
