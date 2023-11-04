require("dotenv").config();

const express = require("express");
const app= express();
const cors = require("cors")
const PORT = process.env.PORT || 8013;
const dbConnect = require("./db/conn")


app.use(express.json());
app.use(cors())

//   admon routes 
const adminAuthroutes = require("./routes/admin/adminAuthRoutes");
app.use("/adminauth/api",adminAuthroutes);

app.get("/",(req,resp)=>{
    resp.status(200).json("server starts")
})

const cloudinary = require("./Cloudinary/cloudinary");
cloudinary.cloudinaryConnect();





// data base connection 

// dbConnect()

app.listen(PORT,()=>{
    console.log(`server starts at ${PORT}`)
})