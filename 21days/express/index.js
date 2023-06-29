const express = require('express')

const app=express();

app.listen(2281);

app.get('',(req,resp)=>{
  resp.send("hii this is home page")
  resp.end();
})