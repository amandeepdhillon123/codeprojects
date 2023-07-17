
const express = require("express");

const app = express();

require("dotenv").config;

const PORT = process.env.PORT || 4000;

app.use(express.json());

const todoRoute = require("./routes/todo");

app.use("/api/v1",todoRoute);

const dbConnect= require("./config/database");
dbConnect()

app.listen(PORT ,()=>{
    console.log("chl gya bhai ")
})

app.get("/",(req,resp)=>{
    resp.send("hello jii")
})



