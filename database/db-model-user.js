const { Sequelize } = require('sequelize');
const sequelize = require('./db');

const User = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  }
});


const Order = sequelize.define("Order", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});


const Product = sequelize.define("Product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  manufacturer: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Catalog = sequelize.define("Catalog", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});


const ProductPerOrder = sequelize.define("ProductPerOrder", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  }
});


User.hasMany(Order,{ onDelete: "Cascade" });
Catalog.hasMany(Product,{ onDelete: "Cascade" });
Order.belongsToMany(Product, {through: ProductPerOrder});
Product.belongsToMany(Order, {through: ProductPerOrder});


// User.create({
//     name: "Tom",
//     email: "elcornme@gmail.com",
//     password: "12345678",
//     status: "admin"
//   }).then(res=>{
//     console.log(res);
//   }).catch(err=>console.log(err));


// User.findAll({where:{name: "Tom"}, raw: true })
// .then(users=>{
//   console.log(users);
// }).catch(err=>console.log(err));


module.exports = {
  User,
  Order,
  Catalog,
  Product,
  ProductPerOrder
};


