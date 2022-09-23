const { User } = require('../database/db-model-user');

const getIndex = (req, res) => {
  res.render('index', {title: 'Online Shop'});   
};

const postIndex = (req, res) => {
  User.findAll({where:{name: "Tom"}, raw: true })
    .then(users=>{
      console.log(users);
    }).catch(err=>console.log(err));
  res.status(200).json('return response')
};

module.exports = {
  getIndex,
  postIndex
};