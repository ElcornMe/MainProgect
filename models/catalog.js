const def = (db, DataTypes, options) => {
  const model = db.define(
    "Catalog",
    {
      title: DataTypes.STRING
    }
  );

  model.associate = (models) => {
    model.hasMany(models.Product, {
      foreignKey: "catalogId",
      as: "catalog",
      onUpdate: "NO ACTION",
      onDelete: "CASCADE"
    });
  };

  return model;
};

module.exports = def;