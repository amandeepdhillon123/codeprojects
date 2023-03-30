
const express = require('express');

const app = express();
const reqFilter=(req,resp,next) =>{
    // console.log(reqFilter); 

    if(!req.query.age)
    {
  resp.send("please proveid eage");
    }
    else if(req.query.age<18)
    {
        resp.send("u can not access this page "); 
    }
    else
    {
        next();
    }
    
}

app.use(reqFilter)

app.get('/',(req,resp) =>{
 
    resp.send("<h1>Welcome to Home page</h1>")
})


app.get('/about',(req,resp) =>{
 
    resp.send("<h1>Welcome to About page</h1>")
})

app.listen(2139);

