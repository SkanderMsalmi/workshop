var mongoose = require('mongoose');
var configDb = require('./mongoose/database/mongodb.json');

const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');

const studentRouter = require('./routes/student');

mongoose.set('strictQuery', false);

const connect = mongoose.connect(
    configDb.mongo.uri,
    { useNewUrlParser: true,
      useUnifiedTopology: true
    },()=>{console.log("Connected to DB !!");});

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/students',studentRouter);

app.use((req, res, next) => {
    next(createError(404))
});
module.exports = app;