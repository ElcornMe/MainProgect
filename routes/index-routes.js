var express = require('express');
var router = express.Router();
var { getIndex, postIndex } = require('../controllers/index-controller')

router.get('/', getIndex);
router.post('/', postIndex);

module.exports = router;