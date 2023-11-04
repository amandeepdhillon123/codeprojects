
const mongoose = require("mongoose")

require("dotenv").config()

const dbConnect=()=>{
   mongoose.connect(process.env.MONGODB_URL,{
      useNewUrlParser:true,
      useUnifiedTopology:true
   })

   .then(console.log("db Connection successfully"))
   .catch((error)=>{
        console.log("db Connection failed")
        console.error(error);
        process.exit(1)
   })
}

module.exports = dbConnect