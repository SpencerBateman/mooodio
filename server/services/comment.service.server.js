module.exports = function(app) {

  let commentModel = require('../model/comment/comment.model.server');

  let api = {
    'createComment'       : this.createComment,
    'findCommentsByBoard'  : this.findCommentsByBoard,
    'findCommentById'     : this.findCommentById,
    'updateComment'       : this.updateComment,
    'deleteComment'       : this.deleteComment
  };

  app.post('/api/board/:boardId/comment', createComment);
  app.get('/api/board/:boardId/comment', findAllCommentsForBoard);
  app.get('/api/comment/:commentId', findCommentById);
  app.put('/api/comment/:commentId', updateComment);
  app.delete('/api/comment/:commentId', deleteComment);

  function createComment(req, res) {
    let boardId = req.params['boardId'];
    let comment = req.body;
    commentModel.createCommentForBoard(boardId, comment)
    .then(function (comment) {
      res.json(comment);
    });
  }

  function findCommentById(req, res) {
    commentModel.findCommentById((req.params['commentId']))
    .then(function (comment) {
      res.json(comment);
    });
  }

  function findAllCommentsForBoard(req, res) {
    let boardId = req.params['boardId'];
    commentModel.findAllCommentsForBoard(boardId)
    .then(function (comments) {
      res.json(comments);
    });
  }

  function updateComment(req, res) {
    let commentId = req.params['commentId'];
    let comment = req.body;
    commentModel.updateComment(commentId, comment).then(function(oldComment) {
      commentModel.findCommentById(commentId).then(function (comment) {
        res.json(comment);
      });
    });
  }

  function deleteComment(req, res) {
    let commentId = req.params['commentId'];
    commentModel.deleteComment(commentId).then(function(ignore) {
      commentModel.findCommentById(commentId).then(function (err, doc) {
        if (!doc) {
          res.json({});
        }
      });
    });
  }
};


