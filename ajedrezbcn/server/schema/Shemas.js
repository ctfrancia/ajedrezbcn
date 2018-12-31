const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newClub = new Schema({
  nameOfClub: String,
  location: String,
  organizerName: String,
  clubPhone: Number,
  clubEmail: String,
  languages: [String],
  international: [String],
  additionalInfo: String,
  dateRegistered: Date,
});
// will need to save an image 
const newTournament = new Schema({
  clubCreated: Boolean,
  location: String,
  clubPhone: Number,
  clubEmail: String,
  startDate: Date,
  endDate: Date,
  additionalInfo: String,
});

const newUser = new Schema({
  fname: String,
  lname: String,
  password: String,
  email: String,
  neighborhood: String,
  club: String,
  dateAccCreated: Date,
});
