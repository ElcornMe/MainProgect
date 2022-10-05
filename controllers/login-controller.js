const models = require('../database/models');

const model = models.User;

const getLogin = async (req, res) => {
  await res.render('login');  
};

const postLogin = async (req, res) => {
  const { email, password } = req.body; 
  let userName = "";
  let userPassword = "";
  let errorLogIn = "";

const checkValidation = await model.findOne({where: {email: email}})
  .then(user=> {
    if(user) {
      userName = user.name;
      userPassword = user.password;
    }else {
      throw new Error("Wrong email")
    };

    if(userPassword == password) {
      return true;
    }else {
      throw new Error("Wrong password");
    } 
    })
  .catch(err=>  {
    errorLogIn = err.message;
    console.log(err.message);
  });

  if(checkValidation) {
    res.render('main', {title: 'Online Shop', name: userName});
  }else {
    res.send(errorLogIn)
  };

};

  
module.exports = {
  getLogin,
  postLogin
};