'use strict';
import {
  Model
} from 'sequelize'
module.exports = (sequelize, DataTypes) => {
  class restaurants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  restaurants.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    contact: DataTypes.BIGINT,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'restaurants',
  });
  return restaurants;
};