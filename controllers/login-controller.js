const models = require('../database/models');
const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const model = models.User;
const app = express();

app.use(cookieParser('secret key'))


const getLogin = async (req, res) => {
  await res.render('login');
};


const postLogin = async (req, res) => {
  let { email, password } = req.body; 
  let userName;
  let userPassword;
  let errorLogIn;
  let userCity;
  let userId;

const checkValidation = await model.findOne({where: {email: email}})
  .then(user=> {
    if(user) {
      userId = user.id;
      userCity = user.city;
      userName = user.name;
      userPassword = user.password;
      
    }else {
      throw new Error("Wrong email")
    };

    if(userPassword == password) {
      return true;
    }else {
      throw new Error("Wrong password");
    };
    })

  .catch(err=>  {
    errorLogIn = err.message;
    console.log(err.message);
  });

  if(checkValidation) {
    
  let token = jwt.sign(
    { userId: userId },
    process.env.SECRET_KEY
  );

    res.cookie('userId', token, {httpOnly: true});
    res.render('main', {title: 'Online Shop', name: userName, city: userCity});
  }else {
    res.render('error', {cap: errorLogIn, userEmail: "Try once more"});
  };
};

  
module.exports = {
  getLogin,
  postLogin
};