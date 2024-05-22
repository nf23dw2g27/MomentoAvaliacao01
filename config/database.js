const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('MA', 'MA', 'MA2024', {
  host: 'localhost',
  dialect: 'mysql', 
});

module.exports = sequelize;
