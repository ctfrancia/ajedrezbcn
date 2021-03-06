const CONFIG = require('../config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('chessdb', `${CONFIG.duser}`, `${CONFIG.dpass}`, {
  host: 'localhost',
  dialect: 'postgres',
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const User = sequelize.define('users', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  fName: {
    type: Sequelize.STRING,
  },
  lName: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  neighborhood: {
    type: Sequelize.STRING,
  },
  club: {
    type: Sequelize.STRING,
  },
  dateCreated: {
    type: Sequelize.DATE,
  },
});

module.exports = writeToNewUserDB = (ctx) => {
  const { ctx.request.body } = user;
  const date = Date.now();
  const newuser = new User
    .build({
      fName: `${user.fName}`,
      lName: `${user.lName}`,
      password: `${user.password}`,
      email: `${user.email}`,
      neighborhood: `${user.neighborhood}`,
      club: `${user.club}`,
      dateCreated: `${date}`,
    })
    //saving to DB
    .save()
    .then(() => console.log('Created successfully'))
    .catch(err => console.log('OOPS!', err));
}; 
