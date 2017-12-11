var mongoose = require('mongoose');
var BoardSchema = mongoose.Schema ({
  name: String,
  _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  public: Boolean,
  collaborators: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  images: [{type: mongoose.Schema.Types.ObjectId, ref: 'Image'}],
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
  dateCreated: { type: Date, default: Date.now }
}, {collection: 'board'});

module.exports = BoardSchema;

