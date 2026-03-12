const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

stud_id:{
type:Number,
required:true
},

name:{
type:String,
required:true
},

marks1:Number,
marks2:Number,
marks3:Number,

tot:Number

});

module.exports = mongoose.model("Student", studentSchema);