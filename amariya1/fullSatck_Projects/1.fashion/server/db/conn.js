// const mongoose = require("mongoose");


const mongoose = require("mongoose");
requure("dotenv").config();

const dbConnect= ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=> console.log("db Connection successful"))
    .catch((error)=>{

        console.log(error);
        console.log("db connection failed");
        process.exit(1)
    })
}

module.exports = dbConnect;
