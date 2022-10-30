const express = require('express');

const router = express.Router();
const { getCatalog, addCatalog } = require('../controllers/catalog-controller');

router.get('/', getCatalog);
router.post('/', addCatalog);

module.exports = router;
