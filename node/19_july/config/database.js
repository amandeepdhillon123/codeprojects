// // const mongoose = require("mongoose");

// // require("dotenv").config();

// // const dbConnect = () => {
// //     mongoose.connect(process.env.DATABASE_URL, {
// //         useNewUrlParser:true,
// //         useUnifiedTopology: true,
// //     })
// //     .then(() => console.log("DB ka Connection is Successful"))
// //     .catch( (error) => {
// //         console.log("Issue in DB Connection");
// //         console.error(error.message);
// //         //iska matlab kya h ?
// //         process.exit(1);
// //     } );
// // }

// // module.exports = dbConnect;


// const mongoose= require("mongoose");

// require("dotenv").config();

// const dbConnect =()=>{

//     mongoose.connect(process.env.DATABASE_URL,{
//         useNewUrlParser:true,
//         useUnifiedTopology:true,
//     })
//     .then(()=>console.log("db coonection successful"))
//     .catch((err)=>{
//        console.log("connection nehi hooa");
//        console.error(err.message);

//        process.exit(1);
//     })
// }

// module.exports=dbConnect;



const mongoose= require("mongoose")

require("dotenv").config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("conection chl gya bhai"))
    .catch((err)=>{
        console.log("conection mein probelem hai");
        console.error(err.message);
        process.exit(1);
    })
}

module.exports= dbConnect;
 