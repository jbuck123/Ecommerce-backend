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
  //what are the associated products????
});

router.post('/', (req, res) => {
  Category.create()
    .then(new_category => {
      created_item = res.json(new_category)
      console.log(created_item)
    })
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update()
    .then(updated_category => {
      updated_item = res.json(updated_category)
      console.log(updated_item);
    })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.delete()
    .then(deleted_category => {
      deleted_item = res.json(deleted_category)
      console.log(deleted_item)
    })
});

module.exports = router;
