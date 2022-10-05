var express = require('express');
var router = express.Router();
const { getRegistration, postRegistration } = require('../controllers/registration-controller');

router.get('/', getRegistration);
router.post('/', postRegistration);


module.exports = router;