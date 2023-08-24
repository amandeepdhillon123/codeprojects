const express= require('expree')

const  path= require('path');

const  app= express();
const pubPath=path.join(__dirname,'views')

 
app.set('view engine','ejs')

app.get('',(req,resp) =>{

    resp.sendFile(`${pubPath}/index.html`)
})

app.get('/profile',(req,resp) =>{

    resp.render(`profile`)
})

app.listen(2152)