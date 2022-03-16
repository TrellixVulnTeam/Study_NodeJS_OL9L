"use strict"

const express = require("express");
const router = express.Router();

router.get("/", (req, res)=> {
    res.render("./home/index.ejs")
});

router.get("/login", (req, res)=>{
    res.render("./home/login.ejs");
}); 
//send는 자동으로 Content-type 정의해줌

module.exports = router;