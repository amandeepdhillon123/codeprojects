
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    body:{
        required:true,
        type:String
    },
    likes:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like"
    },
    comments:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }

});

module.exports = mongoose.model("Post",postSchema)