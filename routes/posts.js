const express = require('express')
const postsController = require('../controllers/postsController')
const router = express.Router()

router
    .route('/')
    .get(postsController.getAllPosts)
    .post(postsController.addPost)

router
    .route('/:id')
    .get(postsController.getPostById)
    .put(postsController.updatePost)
    .delete(postsController.deletePost)

module.exports = router;