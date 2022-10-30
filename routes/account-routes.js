const express = require('express');

const router = express.Router();
const { getAccount } = require('../controllers/account-controller');

router.get('/', getAccount);

module.exports = router;
