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

        let publishingDate = `${year}-${month}-${day}`

        let sql = `INSERT INTO posts(title, content, picture, publishingDate) values('${this.title}', '${this.content}', '${this.picture}', '${publishingDate}')`;
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

    static updatePost(data){
        let sql = `UPDATE posts title = '${data.title}', content = '${data.content}', picture = '${data.picture}' WHERE postId = ${data.id}`;
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