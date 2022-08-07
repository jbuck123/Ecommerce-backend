const router = require("express").Router();

const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  Category.findAll().then((items) => {
    res.json(items);
  });
  // be sure to include its associated Products
});

router.get("/:id", (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then((items) => {
    res.json(items);
  })
  .catch((err) => res.status(404).json(err));

  // find one category by its `id` value
  // be sure to include its associated Products
  //what are the associated products????
});

router.post("/", (req, res) => {
  Category.create({
    category_name: req.body.category_name,
 
  }).then((data) => res.json(data)); // this is responding with the created object
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {where: { id: req.params.id} })
  .then((data) => {
    res.json(data);
    
  });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy(req.body, {where: { id: req.params.id}},{truncate: false})
  .then((data) => {
    res.json(data);
   
  })
});

module.exports = router;
