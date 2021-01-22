const mong = require('mongoose');

module.exports.postSchema = new mong.Schema({
    meta: {
        user: String,
        createdAt: String, // ISO Date ONLY
        likes: Number,
        comments: [String]
    },
    data: {
        title: String,
        subtitle: String,
        body: String,
    }
})

module.exports.commentSchema = new mong.Schema({
    meta: {
        user: String,
        createdAt: String,
        likes: Number,
        post: String
    },
    data: {
        title: String,
        subtitle: String,
        body: String,
    }
})
