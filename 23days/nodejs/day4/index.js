
const express = require("express");

const app = express();


app.use(express.json())

app.get("/",async(req,resp)=>{
    resp.send("jai ho")
})

app.post("/ram",async(req,resp)=>{
    console.log(req.body)
    resp.send("jai ho")
})

app.listen(3000,()=>{
    console.log("server started")
})