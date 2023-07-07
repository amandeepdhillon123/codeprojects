const express = require('express')

const app = express();

 const reqFilter = require('./ram')
//  app.use(reqFilter)
 
const route =express.Router()
  
route.use(reqFilter)
app.get('/',(req,resp)=>{
      
    resp.send("welcome to home page")
})

app.get('/users',reqFilter,(req,resp)=>{
      
    resp.send("welcome to user page")
})

route.get('/about',reqFilter,(req,resp)=>{
      
    resp.send("welcome to about page")
})

app.use('/', route)

app.listen(2245)