require("dotenv").config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8013;
const router = require("./routes/todo")
 const dbConnect= require("./config/db")
app.use(express.json())
app.use("/api/v1",router)

dbConnect()

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})

app.get("/",(req,resp)=>{
    resp.send("server stared ")
    resp.end();
})