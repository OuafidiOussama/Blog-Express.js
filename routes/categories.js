const express = require('express')
const categoriesController = require('../controllers/categoriesController')
const router = express.Router()

const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'public/uploads/categories')
    },
    filename: function(req, file, cd){
        cd(null, Date.now() + '_' + file.originalname )    
    }
})

let upload = multer({storage: storage})

router
    .route('/')
    .get(categoriesController.getAllCategories)
    .post(upload.single('pictureCat'), categoriesController.addCategory)

router
    .get(('/:id'),categoriesController.getCategoryById)
    .post(('/update/:id'), upload.single('pictureCat'),categoriesController.updateCategory)

module.exports = router;