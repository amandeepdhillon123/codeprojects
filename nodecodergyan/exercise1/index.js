
const express = require('express');

const app =express();

app.get('',(req,resp) =>{
   
    resp.send("hii this is my home page")
});
app.get('/about',(req,resp) =>{
   
    resp.send("hii this is my  about page")
});
app.listen(2135)