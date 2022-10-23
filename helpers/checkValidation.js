const models = require('../database/models');

const User = models.User;

async function Validation(email, pass) {
  let userName;
  let userPassword;
  let errorLogIn;
  let userCity;
  let userId;

const checkValidation = await User.findOne({where: {email: email}})
  .then(user=> {
    if(user) {
      userId = user.id;
      userCity = user.city;
      userName = user.name;
      userPassword = user.password;
    }else {
      throw new Error("Wrong email")
    };

    if(userPassword == pass) {
      console.log("password is correct")
    }else {
      throw new Error("Wrong password");
    }
    })
  .catch(err=>  {
    console.log(err)
    errorLogIn = err.message;
    return errorLogIn
  });
  
  if(checkValidation) {
    return { errorLogIn }
  }else{
    return { userId, userCity, userName, userPassword }
  }
}

  
module.exports = Validation;
