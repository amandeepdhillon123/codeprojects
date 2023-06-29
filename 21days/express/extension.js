const express= require('express')

const app = express();

const path = require('path')

const dirPath = path.join(__dirname,"Page")
  
// app.use(express.static(dirPath))

app.get('/ram',(req,resp)=>{
    resp.sendFile(`${dirPath}/index.html`)
})
app.get('/kaam',(req,resp)=>{
    resp.sendFile(`${dirPath}/about.html`)
})
app.get('*',(req,resp)=>{
    resp.sendFile(`${dirPath}/page.html`)
})
app.listen(2300)