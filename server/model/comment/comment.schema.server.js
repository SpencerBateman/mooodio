var mongoose = require('mongoose');
var CommentSchema = mongoose.Schema ({
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  board: {type: mongoose.Schema.Types.ObjectId, ref: 'Board'},
  text: String,
  dateCreated: { type: Date, default: Date.now }
}, {collection: 'board'});

module.exports = CommentSchema;

