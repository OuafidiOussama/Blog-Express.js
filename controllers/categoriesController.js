const Category = require('../models/categoriesModel')


getAllCategories = async (req, res) =>{
    try{
        const [categories, _] = await Category.findAll();

        res.render('categories', {title: 'Categories', cats: categories})
    }catch(err){
        console.error(err)
    }
}

addCategory = async (req, res) =>{
    try{
        let picture = req.file.filename
        let {name} = req.body
        let cat= new Category(name, picture);

        cat = await cat.save()
        
        res.status(201).redirect('categories')
    }catch(err){
        console.error(err)
    }
}

getCategoryById = async (req, res) =>{
    let id = req.params.id;
    try {
        let [posts, _] = await Category.filter(id)

        res.status(200).render('posts',{title: "Posts" ,posts: posts })
    } catch (err) {
        console.error(err)
    }
}

updateCategory = async (req, res) =>{
    let id = req.params.id
    let {name} = req.body
    let picture = req.file.filename
    try {
        await Category.updateCategory(name, picture, id)
        res.redirect('/categories')
    } catch (err) {
        console.error(err)
    }
}
    

module.exports = {getAllCategories, addCategory, getCategoryById, updateCategory}