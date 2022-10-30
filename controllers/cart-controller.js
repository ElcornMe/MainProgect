const models = require('../database/models');

const { Order } = models;
const { Product } = models;

const getCart = async (req, res) => {
  const { userId } = req.cookies;

  const checkOrdersInCart = await Order.findOne({
    where: { userId },
  })
    .then((order) => {
      // if(order.length) {
      //   let arrOfOrders = [];

      //     for(let i = 0; i < order.length; i++) {
      //       arrOfOrders[i] = order[i].name
      //       console.log(order[i])
      //     }

      //   res.render('cart', { orders: arrOfOrders })
      // }else{
      //   res.render('cart')
      // }

      console.log(order);
      //   order.getProducts()
      //   .then(products=>{
      //     for(product of products){
      //         console.log("course:", product.id );
      //     }
      // })
      res.render('cart');
    });
};

module.exports = {
  getCart,
};
