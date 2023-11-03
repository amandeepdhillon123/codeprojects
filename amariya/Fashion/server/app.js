require("dotenv").config();

const express = require("express");
const app= express();
const cors = require("cors")
const PORT = 4009;

app.use(express.json());
app.use(cors())

app.get("/",(req,resp)=>{
    resp.status(200).json("server starts")
})

app.listen(PORT,()=>{
    console.log(`server starts at ${PORT}`)
})