const express= require("express")
require('./db/conn')
const app =express();
const router = require("./routes/router")
const cors = require('cors')
const port =8009

// app.get("/",(req,resp)=>{
//     resp.status(201).json("server created")
// })

app.use(express.json())
app.use(cors())
app.use(router)
app.listen(port,()=>{
    console.log("port successful")
})