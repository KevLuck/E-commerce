const Sequelize = require('sequelize');
const sequelize = new Sequelize('ecommerce_db', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});
module.exports = sequelize;

// models/Category.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Category extends Model {}
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category'
  }
);
module.exports = Category;

// models/Product.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Product extends Model {}
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isInt: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product'
  }
);
module.exports = Product;
