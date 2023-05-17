
const express = require('express')
// console.log(express)

const app = express();

app.get('',(req,resp) =>{

    resp.send("hello i am home page")
})
app.get('/about',(req,resp) =>{

    resp.send("hello i am about page")
})
app.get('/help',(req,resp) =>{

    resp.send("hello i am help page")
})

app.listen(2173)