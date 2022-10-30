const def = (db, DataTypes, options) => {
  const model = db.define(
    'Order',
    {
      price: DataTypes.STRING,
    },
  );

  model.associate = (models) => {
    model.belongsToMany(models.Product, {
      through: 'ProductPerOrder',
      foreignKey: 'orderId',
      as: 'Order',
      onUpdate: 'NO ACTION',
      onDelete: 'CASCADE',
    });
  };

  return model;
};

module.exports = def;
