
const mongoose = require("mongoose");
 require("dotenv").config(); 
const dbConnect= ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=> console.log(" db Connection successful"))

    .catch((error)=> {
        console.log("db connection failed")
        console.log(error);
       process.exit(1)
        
    })
}

module.exports =dbConnect


