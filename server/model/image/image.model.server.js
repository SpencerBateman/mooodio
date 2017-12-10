let mongoose = require('mongoose');
let ImageSchema = require('./image.schema.server');
let ImageModel = mongoose.model("ImageModel", ImageSchema);

let BoardModel = require('../board/board.model.server');

ImageModel.createImageForBoard      = createImageForBoard;
ImageModel.findImageById           = findImageById;
ImageModel.findAllImageForBoard     = findAllImageForBoard;
ImageModel.updateImage             = updateImage;
ImageModel.deleteImage             = deleteImage;

async function createImageForBoard(boardId, image) {
    let board = await BoardModel.findBoardById(boardId);
    let createdImage = await ImageModel.create(image);

    board.images.push(createdImage._id);
    await board.save();
    createdImage._board = board._id;
    await createdImage.save();
    return createdImage;
}

function findImageById(imageId) {
    return ImageModel.findOne({_id: imageId});
}

function findAllImageForBoard(boardId) {
    return ImageModel.find({_board: boardId});
}

function updateImage(imageId, image) {
    return ImageModel.findByIdAndUpdate(imageId, image);
}

function deleteImage(imageId) {
    return ImageModel.deleteOne({_id: imageId});
}

module.exports = ImageModel;
