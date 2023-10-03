require("dotenv").config()
const express = require("express");
const dbConnect= require("./config/db")
const cors = require("cors")
const route = require("./routes/todo")
const PORT = process.env.PORT || 8003

const app =express();
app.use(express.json())
app.use(cors())

app.use(route)

dbConnect()

app.listen(PORT ,() =>{
    console.log(`server starts at ports ${PORT}`)
})

app.get("/",(req,resp)=>{
    resp.send("helo ")
    resp.send()
})


