const express =require('express');

const dbConnect=require('./mongodb')

// const insert=require('./insertData')

const app=express();
app.use(express.json())

app.get('/',async(req,resp)=>{

  let data =await dbConnect();
  data= await data.find().toArray();
  console.log(data)
  // resp.send({name:"amandeep"}

  resp.send(data)

})

app.post('/',async(req,resp)=>{
    console.log(req.body)
    
    // resp.send({name:"amandeep"})

    resp.send(req.body)

    // let data= await dbConnect();
    // let result =await data.insertOne(req.body);

    // resp.send(result)

    // console.log(result)



})

app.listen(2192)