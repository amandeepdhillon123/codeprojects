require("dotenv").config();
const express = require("express");
const app =express();
const cors =require("cors")
const port =4009


app.use(express.json())
app.use(cors())

app.get("/",(req,resp)=>{
    resp.status(200).json("server start")
})
// start server 

app.listen(port ,()=>{
    console.log(`server starts at port no. ${port}`)
})