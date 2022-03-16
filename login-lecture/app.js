const express = require("express")
const app = express();

//연결
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res)=> {
    res.render("./home/index.ejs")
});

app.get("/login", (req, res)=>{
    res.render("./home/login.ejs");
}); 
//send는 자동으로 Content-type 정의해줌

app.listen(3000, function(){
    console.log("app 가동")
});