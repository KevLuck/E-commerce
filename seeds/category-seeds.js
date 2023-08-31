// seeds/category-seeds.js
const { Category } = require('../models');
const categoryData = [
  {
    category_name: 'Smartphones',
  },
  {
    category_name: 'Laptops',
  },
  {
    category_name: 'Consoles',
  },
];
const seedCategories = () => Category.bulkCreate(categoryData);
module.exports = seedCategories;
