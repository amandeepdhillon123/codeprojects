  

const mongoose = require("mongoose");
   require("dotenv").config();
const dbConnect =()=>{
      mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
      }).then(()=>{console.log("sucessful")})
      .catch((error) =>{
        console.log("unsucessful");

        console.error(error.message);
        process.exit(1);
      })
}

model.exports = dbConnect;