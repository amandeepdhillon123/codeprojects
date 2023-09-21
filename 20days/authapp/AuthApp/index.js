// const express = require("express");
// const app = express();

// require('dotenv').config();
// const PORT = process.env.PORT || 4000;

// //cookie-parser - what is this and why we need this ?

// const cookieParser = require("cookie-parser");
// app.use(cookieParser());

// app.use(express.json());

// require("./config/database").connect();

// //route import and mount
// const user = require("./routes/user");
// app.use("/api/v1", user);

// //actuivate

// app.listen(PORT, () => {
//     console.log(`App is listening at ${PORT}`);
// })

const express = require("express");

const app = express();
require("dotenv").config()

// const PORT = process.env.PORT || 4000 
const route =require("./routes/user")


app.use(express.json());
app.use("/api/v1",route)
// const dbConnect= require("./config/database")

// dbConnect();

app.listen(4000,()=>{
    console.log(`server started at 4000`)
})

