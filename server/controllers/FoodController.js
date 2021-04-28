const { Food } = require('../models');

class FoodController {
  static addFood (req, res, next) {
    const { title, price, ingredients, tag } = req.body;
    const { userId } = req

    Food.create({ title, price, ingredients, tag })
    .then(food => {
      res.status(201).json({ data: { id: food.id, price: food.price, ingredients: food.ingredients, tag: food.tag, UserId: userId } });
    })
    .catch(err => {
      console.log(err);
    })
  }

  static listFood (req, res, next) {
    const { userId } = req;

    Food.findAll({ where: { userId }})
    .then(foods => {
      res.status(200).json( { data: {foods} } )
    })
    .catch(err => {
      console.log(err);
    })
  }

  static deleteFood (req, res, next) {
    const { id } = req.params;

    Food.destroy(id)
    .then(() => {
      res.status(200).json({ message: 'Successfully delete food from your menu' });
    })
    .catch(err => {
      console.log(err);
    })
  }

}

module.exports = FoodController;