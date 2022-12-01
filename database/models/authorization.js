const def = (db, DataTypes) => {
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
