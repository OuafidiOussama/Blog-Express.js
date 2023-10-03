const express = require('express')
const categoriesController = require('../controllers/categoriesController')
const router = express.Router()

router
    .route('/')
    .get(categoriesController.getAllCategories)
    .post(categoriesController.addCategory)

router
    .route('/:id')
    .get(categoriesController.getCategoryById)
    .put(categoriesController.updateCategory)

module.exports = router;