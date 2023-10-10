
const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })

    .then(()=> console.log(" db connection successful"))
    .catch((error)=>[
        console.log("db connection failed"),
        console.error(error)
      
    ])
}

module.exports =dbConnect;


