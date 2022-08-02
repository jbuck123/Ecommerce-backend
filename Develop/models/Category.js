const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id : {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    category_name: {
      type: DataTypes.STRING,
      defaultvalue: null
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
