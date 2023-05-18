const express =require('express')
// const reqFilter=require('./req')
const app =express();

const reqFilter =(req,resp,next) =>{
    // console.log('hello amandeep')
    if(!req.query.age)
    {
        resp.send("please provide age ")
    }

    else if(req.query.age <18)
    {
         resp.send("ypu can not access this page")
    }
    else{  
        next();
    }
    
     

}
app.use(reqFilter)

app.get('/',(req,resp) =>{


    resp.send('welcome to home page') 
    
})


app.get('/user',(req,resp) =>{


    resp.send('welcome to home  user page')
})

app.listen(2176)