const models = require('../database/models');

const model = models.User;

// 0. User Client
// 1. Product Manager
// 2. Order Manager
// 3. Director
// 4. Admin

function permit(...permittedRoles) {
  
  return async (req, res, next) => {

    const user = await model.findOne({where: {id: req.cookies.userId}})
    .then(user => {
      if (permittedRoles.includes(user.role)) {
      next(); 
      } else {
      res.status(403).json({message: "Forbidden"}); 
      }
    })
    .catch(err => {
      console.log(err);
      res.render('error', {cap: "Authorize is failing , please Re-Log in:"});
    })
  }
}


module.exports = permit;