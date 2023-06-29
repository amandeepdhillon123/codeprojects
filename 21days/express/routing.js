

const express = require('express')
const app = express()

app.get('',(req,resp) =>{
    
 resp.send("hello ji" + (req.query.name))
 resp.end()
})
app.listen(2293)
