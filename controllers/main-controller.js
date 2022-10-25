const models = require('../database/models');


const getMain = async (req, res) => {

  res.render('main', {title: 'Online Shop'}); 

}


module.exports = {
  getMain
};