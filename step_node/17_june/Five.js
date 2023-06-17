const express= require('express')
 const path= require('path')
 const dirPath= path.join(__dirname,"/public")
const app = express();
// console.log(dirPath)
app.listen(2227)
app.get('',(req,resp)=>{
    resp.sendFile(`${dirPath}/index.html`)
})

app.get('/ram',(req,resp)=>{
    resp.sendFile(`${dirPath}/about.html`)
})

app.get('*',(req,resp)=>{
    resp.sendFile(`${dirPath}/Not.html`)
})
