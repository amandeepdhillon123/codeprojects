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


// add data 

app.post('',async(req,resp)=>{
    //  resp.send({name:"jaatram"})

    //  console.log(req.body)
    //  resp.send("jai ho")

       let data =  await dbConnect()
       data =  await data.insertOne(req.body);

       resp.send(data)
})



// update data 

app.put("",async(req,resp)=>{

    let data = await dbConnect();

  data=  data.updateOne({"name":"peter"},{$set:{name:"sanju"}})
   
  resp.send(req.body)
})







app.listen(2228)



//  post api method  

// app.post('',)