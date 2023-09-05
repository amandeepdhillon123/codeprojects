const mongoose = require("mongoose");
const validator =require("validator")
const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
           if(!validator.isEmail(value)){
              throw new Error("not valid Email")
           }
        }
    },
    profile:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10
    },
    password:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]

    
})
 module.exports = mongoose.model("admins",adminSchema)