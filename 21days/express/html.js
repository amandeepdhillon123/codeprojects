

const express = require('express');

const app =  express();

app.get('',(req,resp)=>{
    resp.send(`<h1>this is home page</h1> 
    <h1> <a href="/about"> about page </a></h1>`)
})

app.get('/about',(req,resp)=>{
    resp.send(`this is about page`)
})
app.get('/help',(req,resp)=>{
    resp.send("this is help page")
})

app.listen(2297)