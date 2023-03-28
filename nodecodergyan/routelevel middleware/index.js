const express= require('express')
const reqFilter= require('./middleware')
const app= express();

const route = express.Router();



// const reqFilter =(req,resp,next) =>{
//    if(!req.query.age)
//    {
//     resp.send("please provide age")
//    }
//    else if(req.query.age <18)
//    {
//     resp.send("you can not access a")
//    }
//    else{
//     next();
// }
//    }


// app.use(reqFilter)
route.use(reqFilter);

// without  iddleware
app.get('',(req,resp) =>{

    resp.send('welcome to home pag')
})

route.get('/user',(req,resp) =>{

    resp.send('welcome to user pag')
})

// with group middleware 
app.use('/',route)
app.listen(2135)
 