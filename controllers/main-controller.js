const models = require('../database/models');

const model = models.User;


const getMain = async (req, res) => {
    
  const findUserById = await model.findOne({where: {id: req.cookies.userId}})
  .then(user => {
    let userName = user.name;
    let userCity = user.city;
    res.render('main', {title: 'Online Shop', name: `${userName}`, city: userCity}); 
  })
};


module.exports = {
  getMain
};