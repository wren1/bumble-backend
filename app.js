const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/api/users');
const postsRouter = require('./routes/api/posts');
const { environment } = require('./config');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }))
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRouter);
app.use(usersRouter);
app.use(postsRouter);


// error handling


module.exports = app;
