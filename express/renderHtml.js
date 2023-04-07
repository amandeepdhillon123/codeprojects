const express= require('express')

const app=express();

app.get('',(req,resp) =>{
    resp.send(`<h1>hello I am  ${req.query.name}</h1> <a href="/about">Go to about page</a>` )
})

app.get('/about',(req,resp) =>{
    resp.send(`<h1>hello I am home page</h1> <a href="/">Go to home</a>`)
})

app.get('/help',(req,resp) =>{
    resp.send( [{nam:"aman" ,age:55},
    {nam:"aman" ,age:55},
    {nam:"aman" ,age:55},
    {nam:"aman" ,age:55},
    {nam:"aman" ,age:55},
    {nam:"aman" ,age:55},
    {nam:"aman" ,age:55}
])
})

app.listen(2147)