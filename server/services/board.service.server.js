module.exports = function(app) {

  let boardModel = require('../model/board/board.model.server');

  let api = {
    'createBoard'       : this.createBoard,
    'findBoardsByUser'  : this.findBoardsByUser,
    'findBoardById'     : this.findBoardById,
    'updateBoard'       : this.updateBoard,
    'deleteBoard'       : this.deleteBoard,
    'searchBoards'      : this.searchBoards,
    'getAllBoards'      : this.getAllBoards
  };

  app.get('/api/board/search', searchBoards);
  app.get('/api/board/all', getAllBoards);
  app.post('/api/user/:userId/board', createBoard);
  app.get('/api/user/:userId/board', findAllBoardsForUser);
  app.get('/api/board/:boardId', findBoardById);
  app.put('/api/board/:boardId', updateBoard);
  app.delete('/api/board/:boardId', deleteBoard);

  function createBoard(req, res) {
    let userId = req.params['userId'];
    let board = {name: 'my new board', comments: [], public: true};

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
    boardModel.sample().then((sample) => {
      res.json(sample);
    });
  }

  function searchBoards(req, res) {
    let searchTerm = req.query['searchTerm'];
    boardModel.searchBoards(searchTerm).then(function(boards) {
      res.json(boards);
    })
  }
};


