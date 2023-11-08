const mongoose = require("mongoose");
const validator = require("validator");

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
                throw new Error("not valid email")
            }
        }
    },
    profile:{
        type:String,
        required:true
    },
    tokens:[
        {
        token:{
            type:String,
            required:true

        }
    }]
})

module.exports = mongoose.model("admins",adminSchema)