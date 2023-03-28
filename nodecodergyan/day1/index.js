
const express = require('express');

const app = express();

app.get ('',(req,resp) =>{
    resp.send("welcome, this is home age");
});

app.get ('/about',(req,resp) =>{
    resp.send("hell, this is about age");
});

app.get ('/help',(req,resp) =>{
    resp.send("hell, this is help age");
});

app.listen(2124);