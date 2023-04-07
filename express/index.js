






















































































const express= require('express')

const app=express();

app.get('',(req,resp) =>{
    resp.send("hello i home page")
})
app.get('/about',(req,resp) =>{
    resp.send("hello i about page")
})
app.get('/help',(req,resp) =>{
    resp.send("hello i help page")
})
app.listen(2144)

















