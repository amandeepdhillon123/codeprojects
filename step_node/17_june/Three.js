const express= require('express')

const app = express();
console.log(app)

app.listen(2225)

app.get('',(req,resp)=>{
    resp.send(`<h1>hello ji ${req.query.name}</h1>`)
})

app.get('/about',(req,resp)=>{
    resp.send([
        {name:"amandeep", vpo:"xyz"},
        {name:"amandeep", vpo:"xyz"},
        {name:"amandeep", vpo:"xyz"},
        {name:"amandeep", vpo:"xyz"}
    ])
})


app.get('/help',(req,resp)=>{
    resp.send(`<h1>hello ji  help page <a href="/about">about</a>  <a href="/">home</a></h1>`)
})

