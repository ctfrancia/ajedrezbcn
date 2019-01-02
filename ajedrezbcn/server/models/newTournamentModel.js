const Sequelize = require('sequelize');

const sequelize = new Sequelize('tournamentdb', 'christian', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});
const Tournament = sequelize.define('newTournament', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  clubCreated: {
    type: Sequelize.BOOLEAN,
  },
  location: {
    type: Sequelize.STRING,
  },
  clubPhone: {
    type: Sequelize.INTEGER,
  },
  clubEmail: {
    type: Sequelize.STRING,
  },
  startDate: {
    type: Sequelize.DATE,
  },
  endDate: {
    type: Sequelize.DATE,
  },
  additionalInfo: {
    type: Sequelize.TEXT,
  },
  documentOfTournament: {
    type: Sequelize.BLOB('long'), // not sure about this as it is going to be a document
  },
  dateCreated: {
    type: Sequelize.DATE,
  },
});

module.exports = writeToNewTournamentDB = (ctx) => {
  const { ctx.request.body } = tournament;
  const date = Date.now();
  const newTournament = new Tournament
    .build({
      clubCreated: `${tournament.clubCreated}`,
      location: `${tournament.location}`,
      clubPhone: `${tournament.clubPhone}`,
      clubEmail: `${tournament.clubEmail}`,
      startDate: `${tournament.startDate}`,
      endDate: `${tournament.endDate}`,
      additionalInfo: `${tournament.additionalInfo}`,
      documentOfTournament: `${tournament.documentOfTournament}`,
      additionalInfo: `${tournament.additionalInfo}`,
      dateRegistered: `${date}`,
    })
    //saving to DB
    .save()
    .then(() => console.log('Created successfully'))
    .catch(err => console.log('OOPS!', err));
}; 
