var mongoose = require('mongoose');
var configDb = require('./database/mongodb.json');



const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');

const contactRouter = require('./routes/contact');

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

app.use('/contacts',contactRouter);

app.use((req, res, next) => {
    next(createError(404))
});
module.exports = app;