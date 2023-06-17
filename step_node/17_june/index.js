   
   const express= require('express')

   const app= express();

   console.log(app)

   app.listen(2223)

   app.get('',(req,resp) =>{
     
       resp.send(" hello i am amandeep")
       resp.end();
   })
   app.get('/about',(req,resp) =>{
     
    resp.send(" hello i am about")
    resp.end();
})
app.get('/help',(req,resp) =>{
     
    resp.send(" hello i am help")
    resp.end();
})

