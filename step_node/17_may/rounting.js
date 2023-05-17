
const express = require('express');

const app = express();

app.get('',(req,resp) =>{

   console.log("heeel ji",req.query.name)

   resp.send(`welcome${req.query.name}`)
})

app.get('/help',(req,resp) =>{

    console.log("heeel ji",req.query.name)
 
    resp.send(`welcome help ${req.query.name}`)
 })
app.listen(2175)