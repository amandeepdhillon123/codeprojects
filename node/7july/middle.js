const express = require('express')

const app = express();

const reqFilter=(req,resp,next)=>{
     console.log(reqFilter)
     if(!req.query.age)
     {
          resp.send("please provide age")
     }

     else if(!req.query.age < 18)
     {
          resp.send("pleas provide valid age")
     }

     else{
        next()
     }

   
}  
 app.use(reqFilter)

app.get('/',(req,resp)=>{
      
    resp.send("welcome to home page")
})

app.get('/users',(req,resp)=>{
      
    resp.send("welcome to user page")
})

app.listen(2245)