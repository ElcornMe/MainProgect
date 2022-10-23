const models = require('../database/models');

const model = models.User;

const getRegistration = (req, res) => {
  res.render('registration');  
};

const postRegistration = async (req, res) => {
  const { email } = req.body;
  
  const checkEmail = await model.findOne({where:{email: email}, raw: true })
  .then(user=> {
    if(user) return true
  })
  .catch(err=> console.log(err));

  if(checkEmail) {
    res.render('error', {cap: "Wrong!",userEmail:`${email}`, err: "Already registered, if it's yours please try"});
  }else {
    model.create({...req.body});
    res.render('success', {cap: "Congratulations!",userEmail:`${email}`, err: "Have successfully registered, please proceed to"});
  }
};

module.exports = {
  getRegistration,
  postRegistration
};