const mongoose = require("mongoose");
 require("dotenv").config()
const dbConnect =() =>{
    mongoose.connect(process.env.MONGODB_URl,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{console.log("db successful")})
    .catch((err)=>{
        console.log("db connection error")
        console.error(err)
        process.exit(1)
    })
}

module.exports =dbConnect