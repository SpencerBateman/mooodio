let mongoose = require('mongoose');
let UserSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  boards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Board'}],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  followedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  dateCreated: { type: Date, default: Date.now }
}, {collection: 'user'});

module.exports = UserSchema;
