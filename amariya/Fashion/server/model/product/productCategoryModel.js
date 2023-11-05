const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema({
    categoryname:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},
{timestamps:true});

// model
module.exports = mongoose.model("categorymodels",productCategorySchema)