const express = require("express")
const app = express();

//연결
app.set("views", "./views");
app.set("view engine", "ejs");

const home = require("./routes/home");
app.use("/", home);

app.listen(3000, function(){
    console.log("app 가동")
});