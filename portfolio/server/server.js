const express = require("express");
const cors = require("cors")
require("dotenv").config();
const routes = require("./routes/portfolioRoute")
const app =express();
const Port =process.env.PORT || 4000 ;

app.use(express.json())
app.use(cors())


// routes 
app.use('/api/V1/portfolio',routes)

// middleware

app.listen(Port,()=>{
    console.log(`Server is running ${Port}`)
})