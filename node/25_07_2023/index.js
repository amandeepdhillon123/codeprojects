

// const express= require("express");

// const app =express();

// app.use(express.json())

// require("dotenv").config();

// const Port = process.env.Port || 3000;

// const router = require("./routes/todos");

// app.use("/api/v1",router)

// const dbConnect= require("./config/database")

// dbConnect();

// app.listen(Port,()=>{
//  console.log("port successful running")
// })

// app.get("/",(req,resp)=>{
//     resp.send("hello ji kaise ho aap sbhi")
// })

const express = require("express");

const app = express();

require("dotenv").config()

app.use(express.json())

const Port = process.env.PORT || 3000 

const router = require("./routes/todos")

app.use("/app/v1",router)

const dbConnect = require("./config/database")
dbConnect();

app.listen(Port,()=>{
    console.log(`${Port} server chl gya bhai`)
})

app.get("/",(req,resp)=>{
    resp.send("<h1>hello i am Aman DHillon</h1>")
})






