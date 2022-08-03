const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll()
    .then(items => {
    var jsonData = res.json(items)
    console.log(jsonData)
    })
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
Category.findbyPk()
.then(items => {
  id = res.json(items)
  console.log(id)
}  )

  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
