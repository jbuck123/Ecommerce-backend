// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name : {
      type: DataTypes.STRING,
      defaultValues: null,
    },
    price : {
      type: DataTypes.INTEGER,
      defaultValues: null,
      validate: {
        isDecimal: true,
      }
      //validate that this value is a decimal
    },
    stock : {
      type: DataTypes.INTEGER,
      defaultValues:null,
      validate: {
        isNumeric: true,
      }
      //validate that this is a number
    },

    category_id: {
      type: DataTypes.INTEGER,
      defaultValues: null,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
