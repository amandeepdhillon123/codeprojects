require("dotenv").config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8013;
const cors = require("cors")
const dbConnect= require("./db/conn")

app.use(express());
app.use(cors());

// admin routes 

const adminAuthroutes = require("./routes/admin/adminAuthRoute");
app.use('/adminauth/api',adminAuthroutes)

// data base connected 

dbConnect()
app.get("/",(req,resp)=>{
    resp.send("successfull sent");
})
app.listen(PORT,()=>{
    console.log(`server starts at ${PORT}`);
})


