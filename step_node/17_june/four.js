
const express= require('express')
const path=require('path')
const dirPath= path.join(__dirname+"/public")
const app= express();

app.use(express.static(dirPath))
app.listen(2226)

