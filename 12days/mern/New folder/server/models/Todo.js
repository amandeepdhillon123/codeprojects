
const mongoose =  require("mongoose");

const TodoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        minLength:10

    },
    work:{
        type:String,
        required:true
    },
    add:{
        type:String,
        required:true
    },
    desc:{
       type:String,
       required:true
    }

})

module.exports =mongoose.model("users",TodoSchema)
