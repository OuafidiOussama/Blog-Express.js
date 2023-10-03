const express = require("express");

const app = express();

app.use(express.json())

app.set("view engine", "ejs")

app.get('/', (req, res)=>{
    res.render('index')
})

const postsRouter = require('./routes/posts')

app.use('/posts/', postsRouter)

app.listen(3000);

