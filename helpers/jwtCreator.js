const jwt = require('jsonwebtoken');
require('dotenv').config();

const randomString = require('./randomString');

function tokenCreator(Id) {
  return jwt.sign(
    {
      userId: Id,
      salt: randomString(8),
    },
    process.env.SECRET_KEY,
    { expiresIn: '1h' },
  );
}

module.exports = tokenCreator;
