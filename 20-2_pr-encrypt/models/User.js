const User = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    "User",
    {
      userid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: "User",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return model;
};

module.exports = User;
