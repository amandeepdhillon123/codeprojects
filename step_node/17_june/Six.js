const express= require('express')

const app=express();
//   console.log(app)
  app.set('view engine', 'ejs')

app.get('/profile',(req,resp)=>{
     
    const user={
        name:"Amandeep",

        email :"aman@gmail.com",

        skills :['php','js','c++']
    }

    resp.render("profile", {user})
})
app.listen(2232)



