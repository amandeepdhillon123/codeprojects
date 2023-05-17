
const express =require('express');

const path = require('path')

const filePath = path.join(__dirname,"public");


const app = express();

// app.use(express.static(filePath))

app.get('/ram',(req,resp) =>{

    resp.sendFile(`${filePath}/about.html`)
})

app.get('/shyam',(req,resp) =>{

    resp.sendFile(`${filePath}/index.html`)
})

app.get('*',(req,resp) =>{

    resp.sendFile(`${filePath}/404.html`)
})

app.listen(2177)