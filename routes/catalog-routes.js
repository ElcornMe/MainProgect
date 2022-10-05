var express = require('express');
var router = express.Router();
var { getCatalog } = require('../controllers/catalog-controller')

router.get('/', getCatalog);

module.exports = router;