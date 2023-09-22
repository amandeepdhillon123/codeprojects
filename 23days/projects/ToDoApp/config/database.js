const mongoose =require("mongoose");

require("dotenv").config();

const dbConnect= ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=> console.log("db Connection successful"))
    .catch((err)=>{
        console.log("db Connection failed");
        console.error(err.message);
        process.exit(1)
    })
}

 module.exports = dbConnect