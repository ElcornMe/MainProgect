var express = require('express');
var router = express.Router();
var { getCatalog, addCatalog } = require('../controllers/catalog-controller')

router.get('/', getCatalog);
router.post('/', addCatalog);

module.exports = router;