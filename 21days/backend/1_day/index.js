 const express = require("express");

 const app =  express();
   app.use(express.json())
//  app.listen(3000,()=>{
//     console.log("aap is running succeefully")

require("dotenv").config();

const PORT = process.env.PORT || 4000 ;

const todoRouters = require('./routes/todo')
