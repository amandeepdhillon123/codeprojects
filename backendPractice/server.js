
const express= require('express');

const app = express();

app.use(express.json())

app.listen(3010,()=>{
    console.log("server portnoumber 3010")
})
app.get('/',(req,resp) =>{

    resp.send("hello guys ")
})


app.post('/api/cars',(req,resp)=>{

    const{name,brand}=req.body;

    console.log(name);
    console.log(brand);
    resp.send("cars submitted");
})


const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myDatabase',{
    useNewUrlParser:true,
    useUnifiedtopology:true
})
.then(()=>{console.log("connection succesful")})
.catch((error)=>{
    console.log("received an error")
})
