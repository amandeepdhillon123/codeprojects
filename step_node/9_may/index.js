

const express= require('express');
const path= require('path')
const app = express();
const pubPath =path.join(__dirname,"public")

console.log(pubPath)




app.set('view engine','ejs');

app.get('',(req,resp) =>{

    resp.sendFile(`${pubPath}/index.html`)
})

app.get('/help',(req,resp) =>{
     
       const user = {
        name:"amandeep",
        email:'anil@gmail.com',
        city:'nodia',
        skills:['php','js','c++']
       }
    resp.render('profile',{user})
})

app.get('/login',(req,resp) =>{

    resp.render('login')
})

app.listen(2170)