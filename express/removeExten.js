const express= require('express')
 const path = require('path');
 const app=express();

 const pubPath= path.join(__dirname,'public')

//  app.use(express.static(pubPath))

app.get('',(req,resp) =>{

    resp.sendFile(`${pubPath}/index.html`)
})
app.get('/about',(req,resp) =>{

    resp.sendFile(`${pubPath}/about.html`)
})
app.get('/help',(req,resp) =>{

    resp.sendFile(`${pubPath}/help.html`)
})
app.get('*',(req,resp) =>{

    resp.sendFile(`${pubPath}/404.html`)
})

app.listen(2150)