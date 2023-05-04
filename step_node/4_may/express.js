
const express = require('express')

const app= express();

// console.log(app)

app.get('',(req,resp) =>{

    resp.send("hello  express duniya")
})

app.get('/about',(req,resp) =>{

    resp.send("hello  i am about page")
})

app.listen(2166)