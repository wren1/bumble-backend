const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const { ValidationError } = require('sequelize');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/api/users');
const postsRouter = require('./routes/api/posts');
const { environment } = require('./config');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }))
// app.use(cors({ origin: "https://bumbleapp.herokuapp.com/" }))
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRouter);
app.use(usersRouter);
app.use(postsRouter);


// error handling

app.use((req, res, next) => {
    const err = new Error('The requested page could not be found.');
    err.errors = ['The requested page could not be found.'];
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
        err.errors = err.errors.map((e) => e.message);
        err.title = 'Sequelize Error';
    }
    next(err);
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    const isProduction = environment === 'production';
    res.json({
        title: err.title || 'Server Error',
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack
    });
});


module.exports = app;
