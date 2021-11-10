const router = require('express').Router();
const { Category, Product } = require('../../models');
////////////////////////////////////////////////////////// GET ALL CATEGORY DATA
// The `/api/categories` endpoint
// use mini project for ref ///////////////////////////////////////// try catch & async await ***
router.get('/', async (req, res) => {
  // find all categories - findAll - define data - and join
  //  [[[[[[[[[[[[[[[[[[[[[[[[ all ]]]]]]]]]]]]]]]]]]]]]]]]
  // be sure to include** its associated Products 
  // - include : [{model: Product}] - route to models - Product.js 
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    
    res.status(200).json(categoryData);
    //88888888888888888888888888888888888\\
  } catch (err) {
    res.status(500).json(err);
  }
});
///////////////////////////////////////////////////////////// GET CATEGORY ID
router.get('/:id', async (req, res) => {
  // find one category by its `id` value 
  // [[[[[[[[[[[[[[[[[[[[[[[[ id ]]]]]]]]]]]]]]]]]]]]]]]]
  // be sure to include** its associated Products
  //  - include : [{model: Product}] - route to models - Product.js
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
    //88888888888888888888888888888888888\\
  } catch (err) {
    res.status(500).json(err);
  }
});
//////////////////////////////////////////////////////////// CREATE CATEGORY 
router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    
    res.status(200).json(categoryData);
    //88888888888888888888888888888888888\\
  } catch (err) {
    res.status(400).json(err);
  }

});
/////////////////////////////////////////////////////////////// PUT? update CATEGORY ID 
router.put('/:id', (req, res) => {
  // update a category by its `id` value ----------- dont have ref for put =--- look up
  Category.update (req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(updatedCategory => res.json(updatedCategory))
  .catch(err => res.status(400).json(err));
  console.log(err);
});
/////////////////////////////////////////////////////////////// DELETE CATEGORY
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value. where: id 
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
    //88888888888888888888888888888888888\\
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
