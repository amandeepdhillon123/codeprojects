const express = require('express');
const dbConnect = require('./data');

const app = express();


// const dbConnect= require('./data')

app.get("",async(req,resp)=>{

    let data = await dbConnect();
    data = await data.find().toArray()

    resp.send(data)
})

app.listen(2240,()=>{
    console.log("resy")
})