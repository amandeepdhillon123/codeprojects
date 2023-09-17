
require("dotenv").config;
const express= require("express");
const app= express();
const cors = require("cors")
const PORT =6010;
const dbConnect = require("./config/database");

app.get("/",(req,resp)=>{
    resp.status(201).json("server starts")
})

//  databse connected
dbConnect()

app.listen(PORT,()=>{
    console.log(`Server statrts at PORT no ${PORT}`)
})