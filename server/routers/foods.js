const FoodController = require('../controllers/FoodController');

const router = require('express').Router();

router.post('/', FoodController.addFood);
router.get('/', FoodController.listFood);
router.delete('/:id', FoodController.deleteFood);


module.exports = router;