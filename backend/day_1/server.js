
const express = require('express');

const app = express();


const bodyParser= require('body-parser');
app.use(bodyParser.json());

app.listen(2123,()=>{
    console.log("server lived response ")
});

app.get('/',(req,res)=>{

    res.send("hello user how are you")
});

app.post('/api/car',(req,res)=>{

    const{name,brand} =req.body;

    console.log(name)
    console.log(brand)

 res.send("car submitted ")
})

