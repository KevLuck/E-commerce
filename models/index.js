// index.js
const express = require('express');
const app = express();
const sequelize = require('./config/connection');
const { Category, Product, ProductTag, Tag } = require('./models');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router); // Use the router object
app.get('/categories', async (req, res) => {
  const categories = await Category.findAll();
  res.json(categories);
});
app.get('/products', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});
app.get('/products/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  res.json(product);
});
app.post('/products', async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});
app.put('/products/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  await product.update(req.body);
  res.json(product);
});
app.delete('/products/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  await product.destroy();
  res.json(product);
});
app.get('/tags', async (req, res) => {
  const tags = await Tag.findAll();
  res.json(tags);
});
app.get('/tags/:id', async (req, res) => {
  const tag = await Tag.findByPk(req.params.id);
  res.json(tag);
});
app.post('/tags', async (req, res) => {
  const tag = await Tag.create(req.body);
  res.json(tag);
});
app.put('/tags/:id', async (req, res) => {
  const tag = await Tag.findByPk(req.params.id);
  await tag.update(req.body);
  res.json(tag
