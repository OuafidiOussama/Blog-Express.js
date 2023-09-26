const express = require("express");

const app = express();

app.set("view engine", "ejs")

app.get('/', (req, res)=>{
    console.log("here")
    res.render('index')
})

const postsRouter = require('./routes/posts')

app.use('/posts/', postsRouter)

app.listen(3000);

