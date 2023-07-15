const router = require('express').Router();
const { Category } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  const categories = Category.findAll();

  res.status(200).json(categories);
});

router.get('/:id', (req, res) => {
  // find a single category by its `id`
  const category = Category.findOne({ where: { id: req.params.id } });

  res.status(200).json(category);
});

module.exports = router;