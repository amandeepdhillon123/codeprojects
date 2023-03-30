const express = require('express');
const path = require("path");

const app = express();
const publicPath = path.join(__dirname,"public");

// console.log(publicPath)
// console.log(__dirname)

// app.use(express.static(publicPath));

app.get('', (req,resp) =>{
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/about', (req,resp) =>{
    resp.sendFile(`${publicPath}/about.html`)
})

app.get('/help', (req,resp) =>{
    resp.sendFile(`${publicPath}/help.html`)
})

app.get('*', (req,resp) =>{
    resp.sendFile(`${publicPath}/page.html`)
})

app.listen(2138);
  