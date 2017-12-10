module.exports = function(app) {

  let boardModel = require('../model/board/board.model.server');

  let api = {
    'createBoard'       : this.createBoard,
    'findBoardsByUser'  : this.findBoardsByUser,
    'findBoardById'     : this.findBoardById,
    'updateBoard'       : this.updateBoard,
    'deleteBoard'       : this.deleteBoard
  };

  app.post('/api/user/:userId/board', createBoard);
  app.get('/api/user/:userId/board', findAllBoardsForUser);
  app.get('/api/board/:boardId', findBoardById);
  app.put('/api/board/:boardId', updateBoard);
  app.delete('/api/board/:boardId', deleteBoard);
  app.get('/api/board/all', getAllBoards);

  function createBoard(req, res) {
    let userId = req.params['userId'];
    let board = {name: 'my new board'}
    boardModel.createBoardForUser(userId, board)
      .then(function (board) {
        res.json(board);
      });
  }

  function findBoardById(req, res) {
    boardModel.findBoardById((req.params['boardId']))
      .then(function (board) {
        res.json(board);
      });
  }

  function findAllBoardsForUser(req, res) {
    let userId = req.params['userId'];
    boardModel.findAllBoardsForUser(userId)
      .then(function (boards) {
        res.json(boards);
      });
  }

  function updateBoard(req, res) {
    let boardId = req.params['boardId'];
    let board = req.body;
    boardModel.updateBoard(boardId, board).then(function(oldBoard) {
      boardModel.findBoardById(boardId).then(function (board) {
        res.json(board);
      });
    });
  }

  function deleteBoard(req, res) {
    let boardId = req.params['boardId'];
    boardModel.deleteBoard(boardId).then(function(ignore) {
      boardModel.findBoardById(boardId).then(function (err, doc) {
        if (!doc) {
          res.json({});
        }
      });
    });
  }

  function getAllBoards(req, res) {
    console.log('hello');
    console.log(req);
    boardModel.sample().then((sample) => {
      res.json(sample);
    });
  }
};


