
const express = require('express');

const app = express();

app.get('',(req,resp) =>{

    console.log("data send by user ",req.query.name)

    resp.send(`<h1>   ${req.query.name}</h1>`);
});
app.get('/about',(req,resp) =>{

    resp.send("<h1>i am About page</h1>");
});
app.get('/help',(req,resp) =>{

    resp.send("<h1>i am help page</h1>");
});

app.listen(2136);