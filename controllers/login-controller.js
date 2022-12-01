const tokenCreator = require('../helpers/jwtCreator');
require('dotenv').config();

const models = require('../database/models');
const Validation = require('../helpers/checkValidation');
const checkColumnInTable = require('../helpers/checkColumnTable');

// GET METHOD
const getLogin = async (req, res) => {
  await res.render('login');
};

// POST METHOD
const postLogin = async (req, res) => {
  const { email, password } = req.body;

  // VALIDATION FUNCTION
  const checkUser = await Validation(email, password);

  // CREATE TOKEN WITH SALT
  if (!checkUser.errorLogIn) {
  // FUNCTION FOR CREATE JWT TOKEN
    const token = tokenCreator(checkUser.userId);

    // FUNCTION: CREATE OR UPDATE TOKEN IN DATABASE
    await checkColumnInTable(checkUser.userId, token);

    res.cookie('userId', token, { httpOnly: true });
    res.render('account', {
      title: 'Online Shop',
      name: checkUser.userName,
      city: checkUser.userCity,
      email,
      password: checkUser.userPassword,
    });
  } else {
    res.status(401);
    res.render('error', { cap: checkUser.errorLogIn, userEmail: 'Try once more' });
  }
};

// DELETE METHOD
const deleteUser = (req, res) => {
  models.User.destroy({ where: { email: req.body.email } })
    .then((result) => {
      if (result !== 0) {
        res.status(200).json({ massage: `Successful deleted : ${result} user` });
      } else {
        throw new Error('Not found');
      }
    }).catch((err) => res.status(400).json({ massage: `${err}` }));
};

// UPDATE METHOD
const updateUser = (req, res) => {
  models.User.update({ role: req.body.role }, { where: { email: req.body.email } })
    .then((result) => {
      if (result[0] === 0) throw new Error('Not found');
      res.status(200).json({ massage: 'Successful' });
    })
    .catch((err) => res.status(400).json({ massage: `${err}` }));
};

module.exports = {
  getLogin,
  postLogin,
  deleteUser,
  updateUser,
};
