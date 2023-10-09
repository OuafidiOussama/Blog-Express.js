const express = require("express");
const path = require("path");
const Post = require("./models/postsModel")
const Category = require("./models/categoriesModel")



const app = express();


app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs")

app.get('/', async (req, res)=>{
    try {
        const [posts, e] = await Post.findAll()
        const [cats, _] = await Category.findAll()
        res.render('index', {title: 'Home', posts: posts, cats: cats})
    } catch (error) {
        console.log(error);
    }
})

app.get('/newpost', async (req, res)=>{
    try {
        const [cats, _] = await Category.findAll()
        res.render('addPost', {title: 'Add New Post', cats: cats})
    } catch (error) {
        console.error(error)
    }
})
app.get('/newcat', (req, res)=>{
    res.render('addCat', {title: 'Add New Category'})
})

app.get('/updatePost/:id', async(req,res)=>{
    let id= req.params.id
    try {
        const [post, e] = await Post.findById(id)
        const [cats, _] = await Category.findAll()
        res.render('updatePost', {title: 'Update Post', post: post[0], cats: cats})
    } catch (error) {
        console.log(error);
    }
})

app.get('/updateCat/:id', async(req,res)=>{
    let id= req.params.id
    try {
        const [cat, _] = await Category.findById(id)
        res.render('updateCat', {title: 'Update Post', cat: cat[0]})
    } catch (error) {
        console.log(error);
    }
})

const postsRouter = require('./routes/posts')
app.use('/posts', postsRouter)

const categoryRouter = require('./routes/categories')
app.use('/categories', categoryRouter)

app.listen(3000);

