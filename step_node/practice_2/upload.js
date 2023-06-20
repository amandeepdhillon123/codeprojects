const express= require('express');
//   require('./config')
//   const products=require('./product')
  
const app= express();
const multer = require('multer')
const upload =multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null,"uploads")
        },
        filename:function(req,file,cb)
        {
            cb(null,file.filename + "-" + Date.now() + ".jpg")
        }
    })
}).single("user_file");


// app.use(express.json())


app.post('/upload',upload,(req,resp)=>{

    resp.send("file upload")
});

app.listen(2254)

