
const express= require('express');

const app=express();

const reqFilter=(req,resp,next)=>{
    // console.log('reqFilter')

    if(!req.query.age)
    {
        resp.send("please provide age ")
    }
    else if(req.query.age < 18){
         resp.send("you cna enter")
    }
    
    else{
        next();
    }
    
}

app.use(reqFilter)
app.get('/',(req,resp)=>{

    resp.send('welcomw to home page')
})

app.get('/about',(req,resp)=>{

  resp.send('welcomw to about  page')
})
app.listen(2233)