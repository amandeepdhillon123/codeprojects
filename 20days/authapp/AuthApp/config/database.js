const mongoose = require("mongoose")

require("dotenv").config()

exports.dbConnect= ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=> console.log("db connection successful"))
    .catch((err)=>{
        console.log("db connection failed")
        console.error(err)
        process.exit(1)
    }
    )
}