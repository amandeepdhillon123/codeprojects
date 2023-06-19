const express= require('express');
  require('./config')
  const products=require('./product')
  
const app= express();

app.use(express.json())
app.listen(2240)

app.post('/create',async(req,resp)=>{

    // console.log(req.body)
    resp.send("done")

    let data= new products(req.body)
    let result = await data.save();

    // console.log(result)

    resp.send(result)
})
