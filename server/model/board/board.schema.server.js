var mongoose = require('mongoose');
var BoardSchema = mongoose.Schema ({
    name: String,
    _user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    collaborators: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}],
    //images: [{type: mongoose.Schema.Types.ObjectId, ref: 'ImageModel'}],
    //comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'CommentModel'}],
    dateCreated: { type: Date, default: Date.now }
}, {collection: 'board'});

module.exports = BoardSchema;

