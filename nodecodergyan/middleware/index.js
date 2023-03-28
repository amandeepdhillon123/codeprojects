const express= require('express')
const app= express();

const reqFilter =(req,resp,next) =>{
   if(!req.query.age)
   {
    resp.send("please provide age")
   }
   else if(req.query.age <18)
   {
    resp.send("you can not access a")
   }
   else{
    next();
}
   }


app.use(reqFilter)

app.get('',(req,resp) =>{

    resp.send('welcome to home pag')
})

app.get('/user',(req,resp) =>{

    resp.send('welcome to user pag')
})
app.listen(2134)
 