require("dotenv").config();
const cookieParser =require("cookie-parser")
const route = require("./routes/User")
const express = require("express");
const dbConnect= require("./config/db")
const cloudinary = require("./config/cloudinary");
const app = express();

const PORT = process.env.PORT || 8013 ;

app.use(express.json())
app.use(cookieParser())
app.use("/api/v1",route)

cloudinary.cloudinaryConnect();
 
dbConnect()





app.listen(PORT,()=>{
    console.log(`server starts at portno ${PORT}`)
})





