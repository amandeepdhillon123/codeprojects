
const mongoose = require("mongoose");

exports.connect = ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })

    .then(()=> console.log(" Db Connection failed"))
    .catch((error)=>{
          console.log("Db Connection failed");
          console.log(error);
          process.exit(1)
    })
}