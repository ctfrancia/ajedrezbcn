const Sequelize = require('sequelize');
const sequelize = new Sequelize('tournamentdb', 'christian', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = fetchAllTournaments = () => {
  return Tournament.findAll({});
};
