const Post = require('../models/postsModel')


getAllPosts = async (req, res) =>{
    try{
        const [posts, _] = await Post.findAll();

        res.status(200).json({posts})

    }catch(err){
        console.error(err)
    }
}

addPost = async (req, res) =>{
    try{
        let {title, content, picture} = req.body
        let post = new Post(title, content, picture);

        post = await post.save()
        
        res.status(201).json({ message: "Post Created" })
    }catch(err){
        console.error(err)
    }
}

getPostById = async (req, res) =>{
    let id = req.params.id;
    try {
        let [post, _] = await Post.findById(id)

        res.status(200).json({post: post[0]})
    } catch (err) {
        console.error(err)
    }
}

updatePost = async (req, res) =>{
    let data = [
        id => req.params.id,
        title =>req.body.title, 
        content =>req.body.content, 
        picture => req.body.picture
    ]
    try {
        await Post.updatePost(data)
        res.send({message: `Post ${data.id} is Updated`})
    } catch (err) {
        console.error(err)
    }
}

deletePost = async (req, res) =>{
    let id = req.params.id;
    try{
        await Post.deletePost(id)
        res.send({message: `Post ${id} is deleted`})

    }catch(err){
        console.error(err)
    }
}

module.exports = {getAllPosts, addPost, getPostById, updatePost, deletePost}