module.exports = function(app) {

  let imageModel = require('../model/image/image.model.server');
  let boardModel = require('../model/board/board.model.server');

  let multer = require('multer'); // npm install multer --save
  let upload = multer({ dest: __dirname+'/../../src/assets/uploads' });

  api = {
    'createImage'       : this.createImage,
    'findImagesByBoardId'  : this.findImagesByBoardId,
    'findImageById'     : this.findImageById,
    'updateImage'       : this.updateImage,
    'deleteImage'       : this.deleteImage
  };

  app.post('/api/board/:boardId/image', createImage);
  app.get('/api/board/:boardId/image', findAllImagesForBoard);
  app.get('/api/image/:imageId', findImageById);
  app.put('/api/image/:imageId', updateImage);
  app.delete('/api/image/:imageId/:boardId', deleteImage);
  app.post("/api/upload", upload.single('myFile'), uploadImage);
  app.put('/api/board/:boardId/image', updateImageOrder);

  async function updateImageOrder(req, res) {
    let start = req.query['start'];
    let end = req.query['end'];
    let boardId = req.params['boardId'];

    let board = await boardModel.findBoardById(boardId);
    let images = board.images;
    images.splice(end, 0, images.splice(start, 1)[0]);
    board.images = images;
    let newBoard = await boardModel.updateBoard(boardId, board);
    res.json(newBoard);
  }

  function createImage(req, res) {
    let boardId = req.params['boardId'];
    let image = req.body;
    imageModel.createImageForBoard(boardId, image)
      .then(function (image) {
        res.json(image);
      })
  }

  function findImageById(req, res) {
    imageModel.findImageById(req.params['imageId'])
      .then(function(image) {
        res.json(image);
      })
  }

  async function findAllImagesForBoard(req, res) {
    let boardId = req.params['boardId'];

    let board = await boardModel.findBoardById(boardId);
    let imageIds = board.images;
    let images = [];
    for (let i = 0; i < imageIds.length; i++) {
      let image = await imageModel.findImageById(imageIds[i]);
      images.push(image);
    }
    res.json(images);
  }

  function updateImage(req, res) {
    let imageId = req.params['imageId'];
    let image = req.body;
    imageModel.updateImage(imageId, image).then(function(ignore) {
      imageModel.findImageById(imageId).then(function (image) {
        res.json(image);
      })
    })
  }

  async function deleteImage(req, res) {
    let imageId = req.params['imageId'];
    let boardId = req.params['boardId'];
    let board = await boardModel.findBoardById(boardId);

    console.log('hello');

    console.log(board.images);

    board.images.splice(board.images.indexOf(imageId), 1);

    console.log(board.images);

    await boardModel.updateBoard(boardId, board);

    imageModel.findImageById(imageId).then(function (err, doc) {
      if (!doc) {
        res.json({});
      }
    });
  }

  function uploadImage(req, res) {

    let imageId      = req.body.imageId;
    let width         = req.body.width;
    let myFile        = req.file;
    let frontEndUrl   = req.body.frontEndUrl;

    let userId = req.body.userId;
    let websiteId = req.body.websiteId;
    let boardId = req.body.boardId;

    let originalname  = myFile.originalname; // file name on user's computer
    let filename      = myFile.filename;     // new file name in upload folder
    let path          = myFile.path;         // full path of uploaded file
    let destination   = myFile.destination;  // folder where file is saved to
    let size          = myFile.size;
    let mimetype      = myFile.mimetype;

    imageModel.findImageById(imageId).then(function(image) {
      image.url = '/assets/uploads/'+filename;
      image.save().then(function (image) {
        let callbackUrl   = frontEndUrl + '/user/'+userId+'/website/'+websiteId+'/board/'+boardId+'/image';
        res.redirect(callbackUrl);
      })
    });
  }
};


