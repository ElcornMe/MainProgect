const express = require('express');

const router = express.Router();
const { getCatalog, addCatalog, deleteCatalog } = require('../controllers/catalog-controller');

router.get('/', getCatalog);
router.post('/', addCatalog);
router.delete('/', deleteCatalog);

module.exports = router;
