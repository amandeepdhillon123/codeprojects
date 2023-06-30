  
  const express = require('express');

  const app = express();
   app.use(express.json())
  const dbConnect= require('./base');
//   read data 
//   app.get("",async(req,resp) =>{

//     let data = await dbConnect();
//        data  = await data.find().toArray();

//     resp.send(data)
//     )

    app.post('/',async(req,resp) =>{
    //   console.log(req.body)
        // resp.send("done")
        let data = await dbConnect();
         let result = await data.insertMany(req.body);
         resp.send(result)
    })




  app.listen(2211)