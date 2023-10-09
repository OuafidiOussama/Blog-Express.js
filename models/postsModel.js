const db = require('../config/db')

class Post {
    constructor(title, content, picture, categories){
        this.title = title;
        this.content = content;
        this.picture = picture;
        this.categories = categories;
    }

    async save(){
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1 ;
        let day = date.getDate();

        let created_at = `${year}-${month}-${day}`

        let sql = `INSERT INTO posts(title, content, picture, created_at) values('${this.title}', '${this.content}', '${this.picture}', '${created_at}')`;
        const res = await db.execute(sql);
        
        let [postId, _] = res
        
        postId = postId.insertId
        let cats = this.categories
        cats.forEach(categoryId => {
            let holdersql = `INSERT INTO holder (postId, categoryId) VALUES ('${postId}', '${categoryId}')` 
            db.execute(holdersql)
        });
        

        return res;
    }

    static findAll(){
        let sql = "SELECT * FROM posts";
        const res = db.execute(sql);

        return res;
    }

    static findById(id){
        let sql = `SELECT * FROM posts WHERE postId = ${id}`;
        const res = db.execute(sql);

        return res;
    }

    static async updatePost(title, content, picture, categories, postId){
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1 ;
        let day = date.getDate();

        let updated_at = `${year}-${month}-${day}`
        let sql = `UPDATE posts SET title = '${title}', content = '${content}', picture = '${picture}', updated_at = '${updated_at}' WHERE postId = ${postId}`;
        const res = await db.execute(sql);
        
        categories.forEach(categoryId => {
            let holdersql = `INSERT INTO holder (categoryId, postId) VALUES (${categoryId}, ${postId})` 
            db.execute(holdersql)
        });
        

        return res;
    }

    static deletePost(id){
        let sql = `DELETE FROM posts WHERE postId = ${id}`;
        const res = db.execute(sql);

        return res;
    }

    static getPostByTitle(title){
        let sql = `SELECT * FROM posts WHERE title Like '${title}'`
        const res = db.execute(sql);

        return res; 
    }

}

module.exports = Post;