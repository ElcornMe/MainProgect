const express = require('express');

const router = express.Router();
const {
  getLogin, postLogin, deleteUser, updateUser,
} = require('../controllers/login-controller');

router.get('/', getLogin);
router.post('/', postLogin);
router.delete('/', deleteUser);
router.put('/', updateUser);

module.exports = router;
