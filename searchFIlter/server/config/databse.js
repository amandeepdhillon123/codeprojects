
require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=> console.log("database connection successful"))

    .catch((error)=>{
        console.log("database connection error")
        console.log(error)
        process.exit(1)
    })
}

module.exports= dbConnect;