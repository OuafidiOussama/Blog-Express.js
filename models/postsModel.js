const db = require('../config/db')

class Post {
    constructor(title, content, picture){
        this.title = title;
        this.content = content;
        this.picture = picture;
    }

    async save(){
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1 ;
        let day = date.getDate();

        let created_at = `${year}-${month}-${day}`

        let sql = `INSERT INTO posts(title, content, picture, created_at) values('${this.title}', '${this.content}', '${this.picture}', '${created_at}')`;
        const res =  db.execute(sql);

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

    static updatePost(title, content, picture, id){
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1 ;
        let day = date.getDate();

        let updated_at = `${year}-${month}-${day}`

        let sql = `UPDATE posts SET title = '${title}', content = '${content}', picture = '${picture}', updated_at = '${updated_at}' WHERE postId = ${id}`;
        const res = db.execute(sql);

        return res;
    }

    static deletePost(id){
        let sql = `DELETE FROM posts WHERE postId = ${id}`;
        const res = db.execute(sql);

        return res;
    }
}

module.exports = Post;