const mongoose = require("mongoose");

exports.dbConnect = ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

    .then(()=> console.log("DB connection successful"))
   .catch((error)=> {
    console.log("db connection failed")
    console.log(error)
    process.exit(1)
   })
}