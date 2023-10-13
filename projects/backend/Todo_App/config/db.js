const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect= ()=>{
    mongoose.connect(process.env.MONGO_DB,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=> console.log("db connection successful"))
    .catch((error)=>{
        console.log("db coonection failed");
        console.error(error.message);
        process.exit(1)
    })
}

module.exports = dbConnect

