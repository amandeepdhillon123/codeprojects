const express = require('express');
const dbConnect = require('./data');


const app = express();
  app.use(express.json())

app.listen(2252,()=>{
    console.log("resy")
})

// const dbConnect= require('./data')
//   read data 
// app.get("",async(req,resp)=>{

//     let data = await dbConnect();
//     data = await data.find().toArray()

//     resp.send(data)
// })


// api data




app.post("/",async(req,resp)=>{

   let data = await dbConnect();

   data =await data.insertOne(req.body)


   resp.send(send ,"done")
   


})


















