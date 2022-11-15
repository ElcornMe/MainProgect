const models = require('../database/models');

const model = models.Catalog;

// POST METHOD
const addCatalog = async (req, res) => {
  await model.findOne({ where: { title: req.body.title } })
    .then((catalog) => {
      if (!catalog) {
        model.create({
          title: req.body.title,
        }).then(() => res.status(200).json({ massage: 'Successful' }));
      } else {
        throw new Error('Already created');
      }
    })
    .catch((err) => res.status(400).json({ massage: `${err}` }));
};

// GET METHOD
const getCatalog = (req, res) => {
  model.findAll({ raw: true })
    .then((catalog) => {
      const arrOfCatalogs = [];

      for (let i = 0; i < catalog.length; i++) {
        arrOfCatalogs[i] = catalog[i].title;
      }

      res.render('catalog', { raw: arrOfCatalogs });
    });
};

// DELETE METHOD
const deleteCatalog = (req, res) => {
  model.destroy({
    where: {
      title: req.body.title,
    },
  }).then((result) => {
    if (result !== 0) {
      res.status(200).json({ massage: `Successful deleted : ${result} product` });
    } else {
      throw new Error('Not found');
    }
  }).catch((err) => res.status(400).json({ massage: `${err}` }));
};

module.exports = {
  getCatalog,
  addCatalog,
  deleteCatalog,
};
