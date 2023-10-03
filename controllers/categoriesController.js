const Category = require('../models/categoriesModel')


getAllCategories = async (req, res) =>{
    try{
        const [categories, _] = await Category.findAll();

        res.status(200).json({categories})

    }catch(err){
        console.error(err)
    }
}

addCategory = async (req, res) =>{
    try{
        let {name} = req.body
        let cat= new Category(name);

        cat = await cat.save()
        
        res.status(201).json({ message: "Category Created" })
    }catch(err){
        console.error(err)
    }
}

getCategoryById = async (req, res) =>{
    let id = req.params.id;
    try {
        let [cat, _] = await Category.findById(id)

        res.status(200).json({category: cat[0]})
    } catch (err) {
        console.error(err)
    }
}

updateCategory = async (req, res) =>{
    let id = req.params.id
    let {name} = req.body
    try {
        await Category.updateCategory(name, id)
        res.send({message: `Category ${id} is Updated`})
    } catch (err) {
        console.error(err)
    }
}


module.exports = {getAllCategories, addCategory, getCategoryById, updateCategory}