const express = require('express');

const router = express.Router();
const { getMain } = require('../controllers/main-controller');

router.get('/', getMain);

module.exports = router;
