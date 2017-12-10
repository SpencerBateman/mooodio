var mongoose = require('mongoose');
var ImageSchema = mongoose.Schema ({
  _board: {type: mongoose.Schema.Types.ObjectId, ref: 'BoardModel'},
  left: Number,
  top: Number,
  url: String,
  length: Number,
  width: Number,
  dateCreated: { type: Date, default: Date.now }
}, {collection: 'image'});

module.exports = ImageSchema;

