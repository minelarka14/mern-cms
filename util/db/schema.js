const mong = require('mongoose');

module.exports.postSchema = new mong.Schema({
    meta: {
        user: String,
        createdAt: String, // ISO Date ONLY
        likes: Number,
        comments: [{
            meta: {
                user: String,
                createdAt: String,
                likes: Number
            },
            data: {
                body: String,
            }
        }]
    },
    data: {
        title: String,
        subtitle: String,
        body: String,
    }
})
