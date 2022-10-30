const def = (db, DataTypes, options) => {
  const model = db.define(
    'Authorization',
    {
      token: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
  );

  return model;
};

module.exports = def;
