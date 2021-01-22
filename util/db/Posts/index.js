const mong = require('mongoose')
const schemas = require('../schema')

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

module.exports.getAllPosts = async () => {
    const Post = new mong.model('Post', schemas.postSchema);
    try {
        return (await Post.find({}));
    }catch (e){
        throw new Error(e);
    }
}