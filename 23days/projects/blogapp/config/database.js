
const mongo = require("mongoose");
require("dotenv").config();

const dbConnect =()=>{
    mongo.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    
    .then(()=> console.log("Db connection successful"))
    .catch((error)=>{
       console.log("db connection failed");
       console.error(error.message);
       process.exit(1)
    })
}
module.exports =dbConnect