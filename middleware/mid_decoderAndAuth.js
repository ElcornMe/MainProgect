const models = require('../database/models');
const jwt = require('jsonwebtoken');

const model = models.Authorization;
 

async function decoderAndAuth (req, res, next) {
  const jwtToken = req.cookies.userId;

  await model.findOne({where: {token: jwtToken}})
    .then(user => {
      jwt.verify(
        jwtToken,
        process.env.SECRET_KEY, 
        function (err, decoded) {
          if (!err) {
            req.cookies = decoded;
            next();
          }else{
            res.render('error', {cap: "Authorize is failing , please Re-Log in:"});
          }
        }
      );
    })
    .catch(err => {
      console.log(err)
      res.render('error', {cap: "Authorize is failing , please Re-Log in:"});
    }) 
};

module.exports = decoderAndAuth;