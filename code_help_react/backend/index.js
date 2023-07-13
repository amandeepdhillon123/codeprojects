

const express = require('express');

const app = express();

app.use(express.json())



require("dotenv").config();

const PORT = process.env.PORT || 4000 ;


const todoRoutes = require('./routes/todo')

app.use("/api/v1",todoRoutes)

app.listen(PORT,()=>{
    console.log("amandeep")
})

const dbConnect = require('./config/database')

dbConnect();

app.get("/",(req,resp)=>{
    resp.send("<h1>hello ji</h1>")
    
})