// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
 
    product_name : {
      type: dataTypes.STRING,
      defaultValues: null,
    },
    price : {
      type: dataTypes.INTEGER,
      defaultValues: null,
    },
    stock : {
      type: dataTypes.INTEGER,
      defaultValues:null
    },
    category_id: {
      type: dataTypes.INTEGER,
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
