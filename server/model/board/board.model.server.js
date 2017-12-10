let mongoose = require('mongoose');
let BoardSchema = require('./board.schema.server');
let BoardModel = mongoose.model("BoardModel", BoardSchema);

let UserModel = require('../user/user.model.server');

BoardModel.createBoardForUser       = createBoardForUser;
BoardModel.findBoardById            = findBoardById;
BoardModel.findAllBoardsForUser     = findAllBoardsForUser;
BoardModel.updateBoard              = updateBoard;
BoardModel.deleteBoard              = deleteBoard;
BoardModel.sample                   = sample;

async function createBoardForUser(userId, board) {
  let user = await UserModel.findUserById(userId);
  let createdBoard = await BoardModel.create(board);

  user.boards.push(createdBoard._id);
  await user.save();
  createdBoard._user = user._id;
  await createdBoard.save();
  return createdBoard;
}

function findBoardById(boardId) {
  return BoardModel.findOne({_id: boardId});
}

function findAllBoardsForUser(userId) {
  return BoardModel.find({_user: userId});
}

function updateBoard(boardId, board) {
  return BoardModel.findByIdAndUpdate(boardId, board);
}

function deleteBoard(boardId) {
  return BoardModel.deleteOne({_id: boardId});
}

async function sample() {
  console.log('sampled');
  let sample = await BoardModel.aggregate([{ $sample: {size: 4}}]);
  console.log(sample);
}

module.exports = BoardModel;
