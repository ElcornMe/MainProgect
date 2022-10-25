const models = require('../database/models');


const getAccount = async (req, res) => {

  const userInfo = await models.User.findOne({where: {id: req.cookies.userId}}) 
  .then(user => {
    res.render('account' , {name: user.name, city: user.city, email: user.email, password: user.password}); 
  })

};

module.exports = {
  getAccount
};