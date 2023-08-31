const User = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        type: DataTypes.VARCHAR(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.VARCHAR(10),
        allowNull: false,
      },
      pw: {
        type: DataTypes.VARCHAR(20),
        allowNull: false,
      },
    },
    {
      tableName: "user",
      freezeTableName: true,
      timestamps: true,
    }
  );
  return model;
};
module.exports = User;
