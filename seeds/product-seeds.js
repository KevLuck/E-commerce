// seeds/product-seeds.js
const { Product } = require('../models');
const productData = [
  {
    product_name: 'Apple iPhone 12',
    price: 999.99,
    stock: 10,
    category_id: 1
  },
  {
    product_name: 'Samsung Galaxy S21',
    price: 849.99,
    stock: 15,
    category_id: 1
  },
  {
    product_name: 'Google Pixel 5',
    price: 699.99,
    stock: 20,
    category_id: 1
  },
  {
    product_name: 'Apple MacBook Air',
    price: 999.99,
    stock: 10,
    category_id: 2
  },
  {
    product_name: 'Microsoft Surface Laptop 4',
    price: 1299.99,
    stock: 15,
    category_id: 2
  },
  {
    product_name: 'Google Chromebook',
    price: 299.99,
    stock: 20,
    category_id: 2
  },
  {
    product_name: 'Sony PlayStation 5',
    price: 499.99,
    stock: 10,
    category_id: 3
  },
  {
    product_name: 'Microsoft Xbox Series X',
    price: 499.99,
    stock: 15,
    category_id: 3
  },
  {
    product_name: 'Nintendo Switch',
    price: 299.99,
    stock: 20,
    category_id: 3
  }
];
const seedProducts = () => Product.bulkCreate(productData);
module.exports = seedProducts;
