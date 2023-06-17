
const express = require('express')

const app= express();
  app.listen(2224)
console.log(app)

app.get('', (req,resp)=>{
    resp.send(`hello ji ${req.query.name}`)
})
