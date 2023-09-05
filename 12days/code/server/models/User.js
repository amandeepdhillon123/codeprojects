
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
     },
     email:{
        type:String,
        required:true,
     },
     password:{
        type:String,
        required:true,
     },
     accoutType:{
        type:String,
        required:true,
        enum:["Admin","Student","Instructor"]
     },
     additonalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Profile"
     },
     token :{
      type:String,
    },
   resetPasswordExpires: {
      type:Date,
    },

     courses:[
        {
             type:mongoose.Schema.Types.ObjectId,
             ref:"Course"
        }
     ],
     image:{
        type:String,
        required:true

     },
     courseProgress:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"CourseProgress",
        }
     ]
})

module.exports = mongoose.model("User",userSchema)