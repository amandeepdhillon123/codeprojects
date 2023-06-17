
const express= require('express');

const app=express();

const reqFilter=(req,resp,next)=>{
    // console.log('reqFilter')

    if(!req.query.age)
    {
        resp.send("<h1>please provide age</h1> ")
    }
    else if(req.query.age < 18){
         resp.send("<h1>you can not access</h1>")
    }
    
    else{
        next();
    }
    
}

// app.use(reqFilter)
app.get('/',(req,resp)=>{

    resp.send('welcomw to home page')
})

app.get('/about', reqFilter,(req,resp)=>{

  resp.send('welcomw to about  page')
})
app.listen(2234)