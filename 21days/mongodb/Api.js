  
  const express = require('express');

  const app = express();

  const dbConnect= require('./base');

  app.get("",async(req,resp) =>{

    let data = await dbConnect();
       data  = await data.find().toArray();

    resp.send(data)
     

   
  })
  app.listen(2209)