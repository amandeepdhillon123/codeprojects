  
  const express = require('express');

  const app = express();
  const mongodb= require('mongodb')
   app.use(express.json())
  const dbConnect= require('./base');
//   read data 
//   app.get("",async(req,resp) =>{

//     let data = await dbConnect();
//        data  = await data.find().toArray();

//     resp.send(data)
//   })

    // app.post('/',async(req,resp) =>{
    // //   console.log(req.body)
    //     // resp.send("done")
    //     let data = await dbConnect();
    //      let result = await data.insertMany(req.body);
    //      resp.send(result)
    // })


    // app.put('/:brand',async(req,resp) =>{
    //     //  console.log(req.body)

    //     let data = await dbConnect();
    //    let result = await data.updateOne(
    //     {
    //         brand:req.params.brand
    //     },
    //     {
    //         $set : req.body
    //     }

    //    );
    //     resp.send(result)
       
    // })
   
     app.delete('/:id',async(req,resp) =>{

        console.log(req.params.id)
             
        let data = await dbConnect();

        const result = await data. deleteOne(
            {
             _id : new mongodb.ObjectId(req.params.id)
            }
        )
        resp.send("done")
     })



    






  app.listen(2211)