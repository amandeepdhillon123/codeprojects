const express = require('express');
const path = require("path");

const app = express();
const publicPath = path.join(__dirname,"public");
 app.set('view engine', 'ejs');
// console.log(publicPath)
// console.log(__dirname)

// app.use(express.static(publicPath));

app.get('/profile', (req,resp) =>{
    const user ={
        name:"aman",
        email:"xyz@24397",
        city:"noida"

        // skills:['php','js','c++']
    
    }
    resp.render('profile',{user});
});



app.listen(2139);
  