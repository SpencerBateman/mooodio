let mongoose = require('mongoose');
let CommentSchema = require('./comment.schema.server');
let CommentModel = mongoose.model("CommentModel", CommentSchema);

let BoardModel = require('../board/board.model.server');

CommentModel.createCommentForBoard       = createCommentForBoard;
CommentModel.findCommentById            = findCommentById;
CommentModel.findAllCommentsForBoard     = findAllCommentsForBoard;
CommentModel.updateComment              = updateComment;
CommentModel.deleteComment              = deleteComment;

async function createCommentForBoard(boardId, comment) {
  let board = await BoardModel.findBoardById(boardId);
  let createdComment = await CommentModel.create(comment);

  board.comments.push(createdComment._id);
  await board.save();
  createdComment.board = board._id;
  await createdComment.save();
  return createdComment;
}

function findCommentById(commentId) {
  return CommentModel.findOne({_id: commentId});
}

function findAllCommentsForBoard(boardId) {
  return CommentModel.find({board: boardId});
}

function updateComment(commentId, comment) {
  return CommentModel.findByIdAndUpdate(commentId, comment);
}

function deleteComment(commentId) {
  return CommentModel.deleteOne({_id: commentId});
}

module.exports = CommentModel;
