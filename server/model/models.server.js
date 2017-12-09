var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1:27017/mooodio', { useMongoClient: true});
module.exports = db;
