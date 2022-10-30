const models = require('../database/models');

const model = models.User;

async function checkAuth (req, res, next) {
  
  const checkUser = await model.findOne({where: {id: req.cookies.userId}})
  .then((user) => {
    if(null){
      res.render('error', {cap: "Authorize is failing , please Re-Log in:"});
    }
    next()
  })
  .catch(err => {
    console.log(err)
    res.render('error', {cap: "Authorize is failing , please Re-Log in:"});
  })
};

module.exports = checkAuth;


