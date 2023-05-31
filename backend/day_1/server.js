const express= require('express')

const app= express();

// app.use(express.json())

const bodyParser=require('body-parser')

app.use(bodyParser.json())

app.listen(3009,()=>{
    console.log("server started at port ")
})

app.get('/',(req,resp) =>{

    resp.send("hello i am server")
})

app.post('/api/cars',(req,resp) =>{

    const{name,brand} = req.body;

    console.log(name);
    console.log(brand);

    resp.send("car submitted successfully")

})

const mongoose= require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase',{

useNewUrlParser:true,
useUnifiedTopology:true
})
.then(()=>{
    console.log("connection successful")
})
.catch((error) =>{
    console.log("received an error")
});