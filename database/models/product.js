const def = (db, DataTypes, options) => {
  const model = db.define(
    "Product",
    {
      name: DataTypes.STRING,
      manufacturer: DataTypes.STRING,
      price: DataTypes.INTEGER,
      amount: DataTypes.INTEGER
    }
  );

  model.associate = (models) => {
    model.belongsToMany(models.Order, { 
      through: "ProductPerOrder",
      foreignKey: "productId",
      as:"product",
      onUpdate: "NO ACTION",
      onDelete: "CASCADE"
    });
  };

  return model;
};

module.exports = def;