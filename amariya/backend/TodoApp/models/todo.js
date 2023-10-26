
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        tyoe:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()

    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now()
    }
})

module.exports = mongoose.model("users",userSchema)