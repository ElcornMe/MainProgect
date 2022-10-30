const express = require('express');

const router = express.Router();
const { getLogin, postLogin } = require('../controllers/login-controller');

router.get('/', getLogin);
router.post('/', postLogin);

module.exports = router;
