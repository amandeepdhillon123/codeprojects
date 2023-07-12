
const express = require('express')

require('./config')
const products= require('./products')
 
const app = express();

app.use(express.json())
 
app.listen(2124,()=>{
    console.log("server successful")
})

//  app.post('/create',async(req,resp)=>{
//     //    console.log(req.body)
//     // resp.send("done")
//     let data = new products(req.body);
//     let result = await data.save()

//     console.log(result)

//     resp.send(result)
    
// })

// get data 

// app.get('/list',async(req,resp)=>{
     
//     let data = await products.find()

//     resp.send(data)
// })


// app.delete('/delete/:_id',async(req,resp)=>{
//           console.log(req.params)

//           let data = await products.deleteOne(req.params)

//           resp.send(data)
// })


app.put('/update/:_id',async(req,resp)=>{
          console.log(req.params)

          let data = await products.updateOne(req.params,{$set:{name:"dnaju"}})

          resp.send(data)
})

