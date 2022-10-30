const def = (db, DataTypes, options) => {
  const model = db.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      city: DataTypes.STRING,
      role: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
  );

  model.associate = (models) => {
    model.hasMany(models.Order, {
      foreignKey: 'userId',
      as: 'user',
      onUpdate: 'NO ACTION',
      onDelete: 'CASCADE',
    });
  };

  return model;
};

module.exports = def;
