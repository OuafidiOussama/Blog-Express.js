const express = require('express')
const postsController = require('../controllers/postsController')
const router = express.Router()

const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'public/uploads/posts')
    },
    filename: function(req, file, cd){
        cd(null, Date.now() + '_' + file.originalname )    
    }
})

let upload = multer({ storage: storage})



router
    .route('/')
    .get(postsController.getAllPosts)
    .post(upload.single('picturePost'), postsController.addPost)


router
    .get('/:id',postsController.getPostById)
    .post('/update/:id',upload.single('picturePost'),postsController.updatePost)
    .post('/delete/:id',postsController.deletePost)


module.exports = router;