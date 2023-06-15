
const express= require('express')

const app=express();

app.listen(2203)

app.get('',(req,resp)=>{
    resp.send("hello i am amamndep")
})

app.get('/about',(req,resp)=>{
    resp.send("hello i am about page")
})