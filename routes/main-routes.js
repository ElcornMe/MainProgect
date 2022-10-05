var express = require('express');
var router = express.Router();
var { getMain, postMain } = require('../controllers/main-controller')

router.get('/', getMain);
router.post('/', postMain);

module.exports = router;