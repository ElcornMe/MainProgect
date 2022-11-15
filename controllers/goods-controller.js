const models = require('../database/models');

// GET METHOD
const getGoods = (req, res) => {
  res.render('goods');
};

// POST METHOD
const addProducts = async (req, res) => {
  await models.Catalog.findOne({ where: { title: req.body.catalog } })
    .then(async (catalog) => {
      if (!catalog) throw new Error('Catalog not found');

      const checkProduct = await models.Product.findOne({ where: { name: req.body.name } });

      if (checkProduct === null) {
        await models.Product.create({
          catalogId: catalog.id,
          name: req.body.name,
          manufacturer: req.body.manufacturer,
          price: req.body.price,
          amount: req.body.amount,
        })
          .then(() => {
            res.status(200).json({ massage: 'Successful created' });
          })
          .catch((err) => {
            res.status(400).json({ massage: `${err}` });
          });
      } else {
        res.status(400).json({ massage: `${req.body.name} already has into database` });
      }
    })
    .catch((err) => {
      res.status(400).json({ massage: `${err}` });
    });
};

// UPDATE METHOD
const updateProductInfo = (req, res) => {
  models.Product.update(
    {
      amount: req.body.amount,
      price: req.body.price,
    },
    {
      where: { name: req.body.name },
    },
  )
    .then((result) => {
      if (result[0] === 0) throw new Error('Not found');
      res.status(200).json({ massage: 'Successful' });
    })
    .catch((err) => res.status(400).json({ massage: `${err}` }));
};

// DELETE METHOD
const deleteProduct = async (req, res) => {
  models.Product.destroy({ where: { name: req.body.name } })
    .then((result) => {
      if (result === 0) throw new Error('Not found');

      res.status(200).json({ massage: `Successful deleted : ${result} product` });
    })
    .catch((err) => {
      res.status(400).json({ massage: `${err}` });
    });
};

module.exports = {
  getGoods,
  addProducts,
  updateProductInfo,
  deleteProduct,
};
