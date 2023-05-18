const express =require('express')
const reqFilter=require('./req')
const app =express();

const route=express.Router()

// const reqFilter =(req,resp,next) =>{
//     // console.log('hello amandeep')
//     if(!req.query.age)
//     {
//         resp.send("please provide age ")
//     }

//     else if(req.query.age <18)
//     {
//          resp.send("ypu can not access this page")
//     }
//     else{  
//         next();
//     }
    
     

// }
// app.use(reqFilter)

route.use(reqFilter);

app.get('/',(req,resp) =>{


    resp.send('welcome to home page') 
    
})

// single route middleware

// app.get('/user',reqFilter,(req,resp) =>{


//     resp.send('welcome to home  user page')
// })

app.get('/user',(req,resp) =>{


    resp.send('welcome to home  user page')
})

route.get('/about',(req,resp) =>{


    resp.send('welcome to user about page')
})

route.get('/contact',(req,resp) =>{


    resp.send('welcome to user contact page')
})

app.use('/',route)

app.listen(2177)