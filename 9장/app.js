const express = require('express');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const dotenv = require('dotenv');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');

dotenv.config();

const pageRouter = require('./routes/page')

const app = express();

app.set('port', process.env.PORT || 8001) // truly 연산
app.set('view engine', 'html');
nunjucks.configure('views', {
    express : app,
    watch : true,
});

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'public')));
app.jengwon = 'fewjfow';
console.log(express);