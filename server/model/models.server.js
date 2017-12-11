const mongoose = require('mongoose');
let connectionString = 'mongodb://localhost/mooodio'; // for local
if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  let username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  let password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds137206.mlab.com:37206/heroku_blxd9bxr'; // use yours
}
const db = mongoose.connect(connectionString, { useMongoClient: true});
module.exports = db;
