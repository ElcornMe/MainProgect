const models = require('../database/models');

const model = models.User;

async function checkAuth (req, res, next) {
  
  const checkUser = await model.findOne({where: {email: req.cookies.email}})
  .then(() => {
    if(null){
      res.render('error', {cap: "Authorize is failing , please Re-Log in:"});
    }
    next()
  })
  .catch(err => {
    res.render('error', {cap: "Authorize is failing , please Re-Log in:"});
  })
};

module.exports = checkAuth;


