const getMain = (req, res) => {
  res.render('main', {title: 'Online Shop'});   
};

const postMain = (req, res) => {
  // User.findAll({where:{name: ""}, raw: true })
  //   .then(users=>{
  //     console.log(users);
  //   }).catch(err=>console.log(err));
  // res.status(200).json('return response')
};

module.exports = {
  getMain,
  postMain
};