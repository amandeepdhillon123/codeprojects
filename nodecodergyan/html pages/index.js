

const express = require('express');
const path = require('path');

const app = express();
const publicPath =path.join(__dirname,'public');
app.use(express.static(publicPath));

app.listen(2130);




// app.get('',(req,resp) =>{

//     app.send("i am amandeep")
// })
// app.get('',(req,resp) =>{

//     app.send()
// })
// app.get('',(req,resp) =>{

//     app.send()
// })
// app.listen(2129)