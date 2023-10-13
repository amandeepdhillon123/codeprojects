const mongoose = require("mongoose");
 require("dotenv").config()
const dbConnect = ()=>{
    mongoose.connect(process.env.MONGO_DB,{
       useNewUrlParser:true,
       useUnifiedTopology:true
    })
    .then(()=> console.log("db connection successful"))
    .catch((error)=>{
       console.log(error ,"db connection failed")
       process.exit(1)
    })
}

module.exports = dbConnect;