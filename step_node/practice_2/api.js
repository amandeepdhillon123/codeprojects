const express= require('express')

const dbConnect= require('./mongodb')

const mongodb= require('mongodb')

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


//   data=  data.updateOne({"name":"peter"},{$set:{name:"sanju"}})
   

data= data.updateOne({name:req.params.name},{$set:req.body})
  resp.send(data)
})

app.delete("/:id",async(req,resp)=>{

    // console.log(req.params.id)
     resp.send("done")
    let data =await dbConnect();
     data= await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})

     
     resp.send(data)
})

app.listen(2235)







app.listen(2228)



//  post api method  

// app.post('',)