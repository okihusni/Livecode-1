'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Food, { foreignKey: 'userId' })
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
  }, {
    sequelize,
    hooks: {
      beforeCreate(user) {
        const salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(user.password, salt);
      }
    },
    modelName: 'User',
  });
  return User;
};