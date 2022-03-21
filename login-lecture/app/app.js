const express = require("express")
const app = express();

//연결
app.set("views", "./views");
app.set("view engine", "ejs");

const home = require("./routes/home");
app.use("/", home);

module.exports = app;