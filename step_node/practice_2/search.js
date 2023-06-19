const express= require('express');
  require('./config')
  const products=require('./product')
  
const app= express();

app.use(express.json())
app.listen(2250)

app.get("/search/:key",async(req,resp) => {
    let data= await products.find({
           
           "$or":[
               {"name":{$regex:req.params.key}},
               {"brand":{$regex:req.params.key}}
           ]
    })
//   resp.send("done")
    resp.send(data)

})








