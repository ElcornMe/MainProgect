const jwt = require('jsonwebtoken');
const models = require('../database/models');

const model = models.Authorization;

async function decodeToken(req, res, next) {
  const jwtToken = req.cookies.userId;

  await model.findOne({ where: { token: jwtToken } })
    .then((user) => {
      jwt.verify(
        user.token,
        process.env.SECRET_KEY,
        (err, decoded) => {
          if (!err) {
            req.cookies = decoded;
            next();
          } else {
            console.log(err);
            next();
          }
        },
      );
    })
    .catch((err) => {
      console.log(err);
      next();
    });
}

module.exports = decodeToken;
