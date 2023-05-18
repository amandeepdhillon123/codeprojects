const express =require('express')

const app=express();
app.set('view engine','ejs')

app.get('/profile',(req,resp) =>{
    resp.render('profile');

})

app.get('/contact',(req,resp) =>{
    // resp.render('profile');

    const user={
        name:"aman",
        email:"xyz@gmail.com",
        country:'usa',
        skills :['php','js','c++']
    }
    resp.render('contact',{user})

})

app.get('/login',(req,resp) =>{

    resp.render('login')
})


app.listen(2173)