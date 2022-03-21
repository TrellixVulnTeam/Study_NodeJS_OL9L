"use strict"

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);

router.get("/login", ctrl.output.login); 
router.post("/login", ctrl.process.login)
//send는 자동으로 Content-type 정의해줌

module.exports = router;