const express = require('express')
const router = express.Router()

router.get("/", (req, res) =>{
    res.send("Posts");
})

router.get("/new", (req, res) =>{
    res.send("Add New Posts");
})

module.exports = router