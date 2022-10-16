const models = require('../database/models');

const model = models.Catalog;


const addCatalog = (req, res) => {
  
  model.create({
      title: req.body.title
    }).then(res=>{
      console.log(res);
    }).catch(err=>console.log(err));

  };


const getCatalog = (req, res) => {

  model.findAll({raw:true})
  .then((catalog) => {
    let arrOfCatalogs = [];

    for(let i = 0; i < catalog.length; i++) {
      arrOfCatalogs[i] = catalog[i].title
    }

    res.render('catalog', {raw: arrOfCatalogs}); 
    
  })
};


module.exports = {
  getCatalog,
  addCatalog
};