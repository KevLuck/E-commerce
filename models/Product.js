const Category = require('./models/Category');

class Product {
  constructor(name, price, stock, categoryId, tagIds) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.categoryId = new Category(categoryId);
    this.tagIds = tagIds;
  }
}

module.exports = Product;