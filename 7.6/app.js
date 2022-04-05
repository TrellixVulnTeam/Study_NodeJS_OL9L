const express = require('express');
const indexRout = require('./routes')


const app = express();

app.set('port', 3000);

app.listen(app.get('port'), ()=>{
    console.log('연동완료');
});