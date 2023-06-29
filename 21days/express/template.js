 
 const express = require('express');

 const app = express();

 app.set('view engine' ,'ejs')

 app.get('/home',(req,resp) =>{

    const user =({
        name:"amandee",
        city :"jind",
        skill:["dancing","singing","plying"]

    })
    resp.render('home',{user})
 })

 app.listen(2302)