const express = require("express");

const app=express();

require("dotenv").config();

const Port = process.env.Port || 3000;
app.use(express.json());

const routes = require("./routes/rout")

 app.use('/api/v1',routes) 

 const dbConnect = require("./config/database")
 dbConnect();

 app.listen(Port,()=>{
    console.log(`${Port} per nehi chl reha `)
 })