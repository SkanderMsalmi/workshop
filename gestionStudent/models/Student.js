const mongoose = require('mongoose');
Schema =mongoose.Schema;
var Student = new Schema(
    {
        Name:{
            type: String ,
            unique:true
        },
        Age:Number
    }
);

module.exports = mongoose.model('students', Student);