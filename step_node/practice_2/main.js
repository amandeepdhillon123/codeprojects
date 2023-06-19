const express= require('express');
  require('./config')
  const products=require('./product')
  
const app= express();

app.use(express.json())
app.listen(2249)

app.post('/create',async(req,resp)=>{

    // console.log(req.body)
    resp.send("done")

    let data= new products(req.body)
    let result = await data.save();

    // console.log(result)

    resp.send(result)
});

app.get('/list',async(req,resp)=>{
   
    let data = await products.find();
    resp.send(data)
})

app.delete('/delete/:_id',async(req,resp)=>{
    //  console.log(req.params)
    //  resp.send("done")

    let data = await products.deleteOne(req.params);
    resp.send(data)
})



app.put('/update/:_id',async(req,resp)=>{
    //  console.log(req.params)
    //  resp.send("done")

    // let data = await products.updateOne({name:'m3'},{$set:{name:"Dhillon"}})

    let data = await products.updateOne(req.params,{$set: req.body})
    resp.send(data)
})
