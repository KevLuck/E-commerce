const router = require('express').Router();
const { Tag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  const tags = Tag.findAll();

  res.status(200).json(tags);
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  const tag = Tag.findOne({ where: { id: req.params.id } });

  res.status(200).json(tag);
});

module.exports = router;