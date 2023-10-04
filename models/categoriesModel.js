const db = require('../config/db')

class Category {
    constructor(name, picture){
        this.name = name;
        this.picture = picture;
    }

    async save(){
        let sql = `INSERT INTO categories (name, picture) values('${this.name}', '${this.picture})`;
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

    static updateCategory(name,picture , id){
        let sql = `UPDATE categories SET name = '${name}', picture = '${picture}' WHERE categoryId = ${id}`;
        const res = db.execute(sql);

        return res;
    }

}

module.exports = Category;