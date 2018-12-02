const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    user: { type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Post', postSchema)