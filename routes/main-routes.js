var express = require('express');
var router = express.Router();
var { getMain } = require('../controllers/main-controller')

router.get('/', getMain);

module.exports = router;