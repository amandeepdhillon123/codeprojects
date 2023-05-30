const express =require('express');

const dbConnect=require('./mongodb')
const mongodb=require('mongodb')

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
    // console.log(req.body)
    
    // // resp.send({name:"amandeep"})

    // resp.send(req.body)

    let data= await dbConnect();
    let result =await data.insertOne(req.body);

    resp.send(result)

    // console.log(result)



})

app.put('/:brand',async(req,resp) =>{

    // console.log(req.body)

    let data= await dbConnect();
    let result =await data.updateOne(
        {
        //   brand:"samsung"},
        //   brand:req.body.brand},

        brand:req.params.brand},

        //    req.body.brand
        {
            $set:req.body
        }
        
        
        
        );
     
    resp.send({result :"updated"})
})

app.delete('/:id',async(req,resp) =>{
    console.log(req.params.id)

    const data=await dbConnect();
    const result =await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
     resp.send(result)
    
    // resp.send("done")
})

app.listen(2199)