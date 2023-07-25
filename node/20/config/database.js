
const mongoose = require("mongoose")

  require("dotenv").config()

const dbConnect= ()=>{
   mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
   })
   .then(()=>{console.log("db connection successful")})
   .catch((err)=>{
    console.log(err)
    process.exit(1)
   })
}

module.exports = dbConnect;