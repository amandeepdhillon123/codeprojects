require("dotenv").config();
const express = require("express");
const route = require("./routes/router")
const app =express();
const cors =require("cors");
const PORT =6010

const dbConnect= require("./config/databse")
 

app.use(cors());
app.use(express.json())
app.use(route)

app.get("/",(req,res)=>{
  res.status(201).json("server start")
})


dbConnect()

app.listen(PORT,()=>{
    console.log(`server start at ${PORT}`)
})