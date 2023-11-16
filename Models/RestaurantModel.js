// const { DataTypes } = require('sequelize');
// import DataTypes from 'sequelize'
// const sequelize = require('../Config/Connection');
// import sequelize from '../Config/Connection.js';

import { DataTypes } from 'sequelize';
import sequelize from '../Config/Connection.js';


const Restaurant = sequelize.define('restaurants', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  contact: {
    type: DataTypes.BIGINT,
    allowNull: false,
   
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
   
  }
});

export default Restaurant;