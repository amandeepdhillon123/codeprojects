  const express= require('express')
  
  const app=express();
//   console.log(app)
  app.listen(2222)

  app.get('',(req,resp)=>{

    resp.send(`hello ji aap akaisei  ${  req.query.name}`)
  })


  app.get('/about',(req,resp)=>{

    resp.send("hello ji about page")
  })

  app.get('/listen',(req,resp)=>{

    resp.send("hello ji listen page ")
  })