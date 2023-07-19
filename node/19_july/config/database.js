

const mongoose= require("mongoose");

require("dotenv").config();

const dbConnect = ()=>{

    mongoose.connect(process.env.DATABASE_URl,
        {useNewUrlParser:true,
            useUnifiedTopology:true,
        })

        .then(()=> console.log("successful"))
        .catch((err)=>{
            console.log(err);

            console.error(err.message);

            process.exit(1);
        })


}


module.exports =dbConnect
