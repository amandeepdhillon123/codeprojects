const express= require('express')

const app= express();

// app.use(express.json())

const bodyParser=require('body-parser')

app.use(bodyParser.json())

app.listen(3008,()=>{
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