const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  const products = Product.findAll({
    include: [Category, ProductTag],
  });

  res.status(200).json(products);
});

// get one product
router.get('/:id', (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  const product = Product.findOne({
    where: { id: req.params.id },
    include: [Category, ProductTag],
  });

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.status(200).json(product);
});

// create new product
router.post('/', (req, res) => {
  // req.body should look like this...
  // {
  //   product_name: "Basketball",
  //   price: 200.00,
  //   stock: 3,
  //   tagIds: [1, 2, 3, 4]
  // }

  const product = new Product({
    name: req.body.product_name,
    price: req.body.price,
    stock: req.body.stock,
    categoryId: req.body.categoryId,
    tagIds: req.body.tagIds,
  });

  product.save()
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr).then(() => {
          res.status(201).json(product);
        });
      } else {
        // if no product tags, just respond
        res.status(201).json(product);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put('/:id', (req, res) => {
  // update product data
  const product = Product.findOne({ where: { id: req.params.id } });

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  product.name = req.body.product_name;
  product.price = req.body.price;
  product.stock = req.body.stock;
  product.categoryId = req.body.categoryId;
  product.tagIds = req.body.tagIds;

  product.save()
    .then(() => {
      res.json(product);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;