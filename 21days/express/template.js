 
 const express = require('express');

 const app = express();

 app.set('view engine' ,'ejs')

 app.get('/home',(req,resp) =>{

    const user =({
        name:"amandee",
        city :"jind"
    })
    resp.render('home',{user})
 })

 app.listen(2301)