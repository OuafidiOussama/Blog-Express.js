const Post = require('../models/postsModel')
const Category = require('../models/categoriesModel')

getAllPosts = async (req, res) =>{
    try{
        const [cats,_] = await Category.findAll();
        if(req.url.indexOf('search') === -1){
            const [posts, _] = await Post.findAll();
    
            res.status(200).render('posts', {title: 'Posts', posts: posts, cats: cats})
        } else{
            let title = req.query
            title = title.search
            const [posts, _] = await Post.getPostByTitle(title)

            res.render('posts', {title: 'Posts', posts: posts, cats: cats})
        }
    }catch(err){
        console.error(err)
    }
}

addPost = async (req, res) =>{
    try{
        let pictureUpload = req.file.filename
        let {title, content, categories} = req.body
        let post = new Post(title, content, pictureUpload, categories);

        post = await post.save()
        
        res.status(201).redirect('/posts')
    }catch(err){
        console.error(err)
    }
}

getPostById = async (req, res) =>{
    let id = req.params.id;
    try {
        let [post, _] = await Post.findById(id)

        res.render('post', {post: post[0]})
    } catch (err) {
        console.error(err)
    }
}

updatePost = async (req, res) =>{
    let id = req.params.id
    let pictureUpload = req.file.filename
    let {title, content, categories} = req.body
    try {
        await Post.updatePost(title, content, pictureUpload, categories, id)
        res.redirect('/posts')
    } catch (err) {
        console.error(err)
    }
}

deletePost = async (req, res) =>{
    let id = req.params.id;
    try{

        await Post.deletePost(id)
        res.redirect('/posts')

    }catch(err){
        console.error(err)
    }
}



module.exports = {getAllPosts, addPost, getPostById, updatePost, deletePost}