const express= require('express')

const app=express();

app.get('',(req,resp) =>{
    resp.send("hello i home page" +" " + req.query.name)
})
app.get('/about',(req,resp) =>{
    resp.send("hello i about page"  +" " + req.query.address)
})
app.get('/help',(req,resp) =>{
    resp.send("hello i help page" +" " + req.query.feature)
})
app.listen(2146)