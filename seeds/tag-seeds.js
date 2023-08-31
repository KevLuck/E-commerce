const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'electronics',
  },
  {
    tag_name: 'phones',
  },
  {
    tag_name: 'laptops',
  },
  
const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
