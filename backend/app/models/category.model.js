module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING
  }, {
    freezeTableName: true, // Model tableName will be the same as the model name
    timestamps: false
  });
  return Category
}
  