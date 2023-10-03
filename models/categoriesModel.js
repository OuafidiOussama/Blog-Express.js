const db = require('../config/db')

class Category {
    constructor(name){
        this.name = name;
    }

    async save(){
        let sql = `INSERT INTO categories (name) values('${this.name}')`;
        const res =  db.execute(sql);

        return res;
    }

    static findAll(){
        let sql = "SELECT * FROM categories";
        const res = db.execute(sql);

        return res;
    }

    static findById(id){
        let sql = `SELECT * FROM categories WHERE categoryId = ${id}`;
        const res = db.execute(sql);

        return res;
    }

    static updateCategory(name, id){
        let sql = `UPDATE categories SET name = '${name}' WHERE categoryId = ${id}`;
        const res = db.execute(sql);

        return res;
    }

}

module.exports = Category;