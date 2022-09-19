var express = require('express');
var router = express.Router();
var { getController } = require('../controllers/catalog-controller')

router.get('/', getController);

module.exports = router;