const mong = require('mongoose')
require('dotenv').config();

const schemas = require('./schema')

module.exports.mongooseInit = async () => {
    try {
        await mong.connect(process.env.DB_CONN, {
            useNewUrlParser: true,
        })
        console.log('Connected to MongoDB')
    }catch (e){
        throw new Error(e)
    }
}

module.exports.createPost = async (post) => {
    const Post = new mong.model('Post', schemas.postSchema);
    try {
        const newPost = new Post(post);
        await newPost.save()
        console.log('Saved');
    }catch (e) {
        throw new Error(e);
    }
}

module.exports.getPost = async (id) => {
    const Post = new mong.model('Post', schemas.postSchema);
    try {
        return (await Post.findById(id))
    }catch (e) {
        return ({
            error: e,
        })
    }
}
