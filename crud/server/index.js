

const express = require("express");
const mongoose= require("mongoose")
const app = express();
const cors = require("cors");
require("dotenv").config()
app.use(cors())
app.use(express.json())

const Port = 4000

const router = require("./routes/todos")

app.use(router)


const dbConnect = require("./config/database")
dbConnect();

app.listen(Port,()=>{
    console.log(`${Port} server chl gya bhai`)
})

app.get("/",(req,resp)=>{
    resp.send("<h1>hello i am Aman DHillon</h1>")
})






