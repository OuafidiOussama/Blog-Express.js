require('dotenv').config()
const mysql = require('mysql2')

const pool = mysql.createPool({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME
})


module.exports = pool.promise()