const def = (db, DataTypes, options) => {
  const model = db.define(
    "User",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING
    }
  );

  model.associate = (models) => {
    model.hasMany(models.Order, { 
      foreignKey: "userId",
      as:"user",
      onUpdate: "NO ACTION",
      onDelete: "CASCADE"
    });
  };

  return model;
};

module.exports = def;