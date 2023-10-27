
const express = require("express")

const app = express();
require("dotenv").config()
const routes = require("./routes/todo.js");


const PORT = process.env.PORT || 5000;

app.use(express.json())

app.use("/api/v1",routes)




const dbConnect = require("./config/db");
dbConnect();

app.listen(PORT,()=>{
   console.log(`server starts at server no ${PORT}`)
})