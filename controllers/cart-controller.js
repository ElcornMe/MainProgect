const models = require('../database/models');

let model = models.Order;

const getCart = async (req, res) => {

let userId = req.cookies.userId;

const checkOrdersInCart = await model.findAll({where: {userId: userId}}) 
  .then((user) => {
    if(user.length) {
      
    }else{
      res.send('Cart is empty')
    }
  })

  if(checkOrdersInCart) {
    res.render('cart');
  }
}

module.exports = {
  getCart
};