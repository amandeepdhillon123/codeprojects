



// const mongoose= require("mongoose")

// require("dotenv").config();

// const dbConnect = ()=>{
//     mongoose.connect(process.env.DATABASE_URL,{
//         useNewUrlParser:true,
//         useUnifiedTopology:true,
//     })
//     .then(()=>console.log("conection chl gya bhai"))
//     .catch((err)=>{
//         console.log("conection mein probelem hai");
//         console.error(err.message);
//         process.exit(1);
//     })
// }

// module.exports= dbConnect;
 

const mongoose = require("mongoose")

require("dotenv").config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("connection successful"))
    .catch((error)=>{
        console.log(error)
    })
}

module.exports=dbConnect