const mongoose = require("mongoose");

const dbConnect = ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=> console.log("db connection successful"))
    .catch((error)=>{
        console.log(error.message);
        console.log("error in db connection")
        process.exit(1)
    })
}

module.exports= dbConnect