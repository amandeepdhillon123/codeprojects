
require("dotenv").config;
const express= require("express");
const app= express();
const cors = require("cors")
const PORT =6010;
const dbConnect = require("./config/database");
const router = require("./Routes/route")

app.use(express.json());
app.use(cors());

app.use('/api/v1',router)

//  databse connected
dbConnect()

app.listen(PORT,()=>{
    console.log(`Server statrts at PORT no ${PORT}`)
})