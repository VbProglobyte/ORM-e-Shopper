const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// use mini project for ref ///////////////////////////////////////// try catch & async await ***
router.get('/', async (req, res) => {
  // find all categories - findAll - define data - and join [[[[[[[[[[[[[[[[[[[[[[[[ all ]]]]]]]]]]]]]]]]]]]]]]]]
  // be sure to include** its associated Products - include : [{model: Product}] - route to models - Product.js 
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

router.get('/:id', async (req, res) => {
  // find one category by its `id` value [[[[[[[[[[[[[[[[[[[[[[[[ id ]]]]]]]]]]]]]]]]]]]]]]]]
  // be sure to include** its associated Products - include : [{model: Product}] - route to models - Product.js
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!travellerData) {
      res.status(404).json({ message: 'No traveller found with this id!' });
      return;
    }

    res.status(200).json(travellerData);
    //88888888888888888888888888888888888\\
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value ----------- dont have ref for put =--- look up
});

router.delete('/:id', (req, res) => {
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
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
