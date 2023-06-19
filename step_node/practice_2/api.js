const express= require('express')

const dbConnect= require('./mongodb')

const app= express();

 app.use(express.json())
  
//   get method  api 
app.get('', async(req,resp)=>{
    let data= await dbConnect();
    data= await data.find({}).toArray();
    resp.send(data)
})

app.post('',async(req,resp)=>{
    //  resp.send({name:"jaatram"})

    //  console.log(req.body)
    //  resp.send("jai ho")

       let data =  await dbConnect()
       data =  await data.insertOne(req.body);

       resp.send(data)
})







app.listen(2228)



//  post api method  

// app.post('',)