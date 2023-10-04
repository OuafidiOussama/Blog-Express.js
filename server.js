const express = require("express");
const path = require("path");

const app = express();

app.use(express.json())
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs")

app.get('/', (req, res)=>{
    res.render('index')
})
app.get('/posts/', (req, res)=>{
    res.render('posts')
})
app.get('/categories/', (req, res)=>{
    res.render('categories')
})

const postsRouter = require('./routes/posts')
app.use('/posts/', postsRouter)

const categoryRouter = require('./routes/categories')
app.use('/cats/', categoryRouter)

app.listen(3000);

