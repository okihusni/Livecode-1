const FoodController = require('../controllers/FoodController');
const { authorization } = require('../middlewares/auth');

const router = require('express').Router();

router.post('/', FoodController.addFood);
router.get('/', FoodController.listFood);
router.delete('/:id', authorization, FoodController.deleteFood);

module.exports = router;