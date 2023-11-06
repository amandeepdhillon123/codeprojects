const mongoose = require("mongoose");
require("dotenv").config()
const dbConnect = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=> console.log("dbconnection successful"))
    .catch((error)=>{

        console.log(error);
        console.log("dbConnection failed");
        process.exit(1)
    })
}

 module.exports =dbConnect ;
