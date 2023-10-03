

const mongoose = require("mongoose");
require("dotenv").config()

const dbConnect = ()=>{
    mongoose.connect(process.env.MONGODB_URl,{
        useNewUrlparser:true,
        useUnifiedTopology:true
    })

    .then(()=> console.log("connection successful"))
    .catch((error)=>{
         console.error(error)
         console.log("db connection failed")
    })
}

module.exports =dbConnect