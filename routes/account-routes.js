var express = require('express');
var router = express.Router();
var { getAccount } = require('../controllers/account-controller')

router.get('/', getAccount);

module.exports = router;