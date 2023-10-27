const express = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 5000;
const route = require("./routes/blog")

app.use(express.json());
app.use("/api/v1", route)


const dbConnect= require("./config/db");
dbConnect();

app.listen(PORT,()=>{
    console.log(`server starts at port number ${PORT}`)
})
