const { Food } = require('../models');

class FoodController {
  static addFood (req, res, next) {
    const { title, price, ingredients, tag } = req.body;
  }

  static listFood (req, res, next) {

  }

  static deleteFood (req, res, next) {

  }

}

module.exports = FoodController;