// Connection.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('restaurants', 'root', 'VarshaKP@@2000', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
