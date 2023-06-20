
const express = require('express')
  require('./db/config');
  const Users = require('./db/User')
const app= express();
  app.use(express.json());

app.post('/register',async(req,resp)=>{

    let user =new Users(req.body)

    let result= await user.save();
   
    // resp.send("api in progress .....")
    resp.send(result)
})
app.listen(2256)