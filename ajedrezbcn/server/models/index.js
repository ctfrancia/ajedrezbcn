const Sequelize = require('sequelize');
const sequelize = new Sequelize('chatdb', 'christian', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});
