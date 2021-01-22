const mong = require('mongoose');

const schema = require('../schema');

module.exports.createComment = async (user, body, postId) => {
    const Comment = new mong.model('comment', schema.commentSchema)
    const Post = new mong.model('Post', schema.postSchema);
    const newComment = new Comment({
        meta: {
            user,
            createdAt: (new Date()).toISOString(),
            likes: 0,
            post: postId,
        },
        data: {
            body: body,
        }
    })
    try {
        await newComment.save().then( async (d) => {
            await Post.findByIdAndUpdate(postId, {
                $push: {
                    comments: d._id.toString()
                }
            })
        })
    }catch (e) {
        console.log(e)
        throw new Error(e);
    }
}
