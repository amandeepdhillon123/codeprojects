
const express = require('express');
const path = require('path');

const app = express();

const dirPath = path.join(__dirname,"public")
// app.use(express.static(dirPath))

app.get('',(req,resp) =>{
     resp.sendFile(`${dirPath}/index.html`)
})

app.get('/about',(req,resp) =>{
    resp.sendFile(`${dirPath}/about.html`)
})

app.get('/help',(req,resp) =>{
    resp.sendFile(`${dirPath}/help.html`)
})

app.get('*',(req,resp) =>{
    resp.sendFile(`${dirPath}/404.html`)
})

app.listen(2132)