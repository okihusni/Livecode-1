const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserController {
  static register(req, res, next) {
    const { email, password } = req.body;

    User.create({ email, password })
    .then(user => {
      res.status(201).json({ data: { id: user.id, email: user.email } });
    })
    .catch(err => {
      next(err)
    })
  }

  static login(req, res, next) {
    const { email, password } = req.body;

    findOne({ where: { email } })
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const access_token = jwt.sign({ id: user.id }, process.env.JWT_PRIVATE_KEY);
      }
    })
  }
}

module.exports = UserController;