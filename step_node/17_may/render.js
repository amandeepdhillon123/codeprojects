const express = require('express')

const app = express();


app.get('',(req,resp) =>{

    resp.send(`<h1>heeloo i am home page </h1> <a href ="/about">about page</a> `)
})
app.get('/about',(req,resp) =>{

    resp.send([{
        name:"aman",
        email:"hii@gmail.com"
    },{
        name:"aman",
        email:"hii@gmail.com"
    }])
})
app.get('/help',(req,resp) =>{

    resp.send("<h1>heeloo i am home page </h1>")
})

app.listen(2176)