
const express = require('express');
const path = require('path')

const app = express();
const publicPath = path.join(__dirname,'public');
app.set('view engine','ejs')

app.get('',(req,resp) => {
    resp.sendFile('${publicPath}/index.html')
})


// dynamic page  

app.get('/profile',(req,resp) => {
    const user ={
        name:"anil sidhu",
        email:"xyz@gmail.com",
        skill:['php','js','c++','java','python']
    }
    resp.render('profile',{user})
});

app.get('/login',(_,resp) =>{
    resp.render('login');
})
app.listen(2133);