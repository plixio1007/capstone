const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sequelize = require('./config/database');
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const coupleRouter = require('./routes/couple');
const eventRouter = require('./routes/event');
const visitorRouter = require('./routes/visitor');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', usersRouter);
app.use('/api', coupleRouter);
app.use('/api', eventRouter);
app.use('/api', visitorRouter);

sequelize.sync()
    .then(() => {
        console.log('Databases synced!');
    })
    .catch(error => {
        console.error('Unabled to sync the database:', error);
    });

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app;
