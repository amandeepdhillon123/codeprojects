require("dotenv").config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8013;
app.use(express());


app.get("/",(req,resp)=>{
    resp.send("successfull sent");
})
app.listen(PORT,()=>{
    console.log(`server starts at ${PORT}`);
})

