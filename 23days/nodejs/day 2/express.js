const express =require("express");

const app = express();

app.get("/",(req,resp)=>{
    resp.send("hello this is home page")
})

app.get("/about",(req,resp)=>{
     resp.send("this is home page")
})

app.listen(2107)