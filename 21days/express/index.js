const express = require('express')

const app=express();

app.listen(2282);

app.get('/home',(req,resp)=>{
  resp.send("hii this is home page")
  resp.end();
})