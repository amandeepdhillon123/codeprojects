
const mognoose = require("mognoose");
require("dotenv").config();

const dbConnect =()=>{
    mognoose.connect(process.env.MONOGDB_URL,{
        useNewUrlPArser:true,
        useUnifiedTopology:true
    })
    
    .then(()=> console.log("Db connection successful"))
    .catch((error)=>{
       console.log("db connection failed");
       console.error(error.message);
       process.exit(1)
    })
}
module.exports =dbConnect