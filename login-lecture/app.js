const express = require("express")
const app = express();
const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>practice</title>
</head>
<body>
  <h1>한글 되네?</h1>
  <h2>신기하구나.. 너란 녀석....</h2>
  <form action='/'>
    <b>아이디</b>
    <input type="text" name="id" placeholder="ID" method="post" />
    <b>비밀번호</b>
    <input type="password" name="password" placeholder="PW" method="post" />
    <button>확인</button>
  </form>
</body>
</html>
`;

app.get("/", (req, res)=> {
    res.send(html);
    res.send("여기는 루트입니다")// send는 한번밖에 보내지 못하기때문에 2번째 send는 무시
});

app.get("/login", (req, res)=>{
    res.send("여기는 로그인입니다");
}); 
//send는 자동으로 Content-type 정의해줌

app.listen(3000, function(){
    console.log("app 가동")
});