const mongoose = require('mongoose');
if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  let username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  let password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds137206.mlab.com:37206/heroku_blxd9bxr'; // use yours
}
const db = mongoose.connect('mongodb://127.0.0.1:27017/mooodio', { useMongoClient: true});
module.exports = db;
