const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// use mini project for ref ///////////////////////////////////////// try catch & async await 
router.get('/', async (req, res) => {
  // find all categories - findAll 
  // be sure to include its associated Products
  try {
    const categoryData = await Catagory.findAll({
      include: [{ model: Product }]
    })
    res.status(200).json(categoryData);
 //88888888888888888888888888888888888
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {

  } catch {

  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value ----------- dont have ref for put =--- look up
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
