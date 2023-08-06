
const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=> console.log("dbCOnnection successful"))
    .catch((err)=>{
        console.log("db connetion error")
        console.log(err)
        process.exit(1)
    })
}


module.exports =dbConnect