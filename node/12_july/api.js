
const express = require('express')

require('./config')
const products= require('./products')
 
const app = express();

app.use(express.json())
 
app.listen(2123,()=>{
    console.log("server successful")
})

 app.post('/create',async(req,resp)=>{
    //    console.log(req.body)
    // resp.send("done")
    let data = new products(req.body);
    let result = await data.save()

    console.log(result)

    resp.send(result)
    
})