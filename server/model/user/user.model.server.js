var mongoose = require('mongoose');
var UserSchema = require('./user.schema.server');
var UserModel = mongoose.model("UserModel", UserSchema);

UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
UserModel.findUserByFacebookId = findUserByFacebookId;
UserModel.searchUsers = searchUsers;

function findUserByFacebookId(facebookId) {
 return UserModel.findOne({'facebook.id': facebookId});
}

function createUser(user) {
  return UserModel.create(user);
}

function findUserById(userId) {
  return UserModel.findOne({_id: userId});
}

function findUserByUsername(username) {
  return UserModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
  return UserModel.findOne({username: username, password: password});
}

function updateUser(userId, user) {
  var query = {_id: userId};
  return UserModel.update(query, user);
}

function deleteUser(userId) {
  var query = {_id: userId};
  return UserModel.deleteOne(query);
}

function searchUsers(name) {
  let reg = new RegExp(name, 'gi');
  return UserModel.find({username: {$regex: reg}});
}

module.exports = UserModel;
