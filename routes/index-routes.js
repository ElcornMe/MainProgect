var express = require('express');
var router = express.Router();
var { getIndex } = require('../controllers/index-controller')

router.get('/', getIndex);

module.exports = router;