const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const url = 'mongodb://localhost/messagesdb';
mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection;
db.once('open', () => console.log('we are connected'));

