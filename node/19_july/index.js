

const express =require("express");

const app=express();
require("dotenv").config();
app.use(express.json())

const PORT = process.env.PORT || 4000;
const todoRoutes = require('./routes/todo');


app.use("/api/v1", todoRoutes);

const dbConnect= require('./config/database')
dbConnect();

app.listen(PORT,()=> {
    console.log("chl gya hai")
})

app.get("/",(req,resp)=>{
    resp.send("hello jii kya haal")
})
