const models = require('../database/models');


const getGoods = (req, res) => {

  res.render('goods'); 

};

module.exports = {
  getGoods
};