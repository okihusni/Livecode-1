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
      next(err);
    })
  }

  static listFood (req, res, next) {
    const { userId } = req;

    Food.findByPk(userId)
    .then(foods => {
      res.status(200).json( { data: {} } )
    })
  }

  static deleteFood (req, res, next) {

  }

}

module.exports = FoodController;