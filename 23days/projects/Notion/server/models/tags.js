const mongoose = require("mongoose")

const tagsSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type:String
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    }
    

})

module.exports = mongoose.model("Tag",tagsSchema)