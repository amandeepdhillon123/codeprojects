// const express = require("express");
// const app = express();

// //load config from env file
// require("dotenv").config();
// const PORT = process.env.PORT || 4000;

// //middleware to parse json request body
// app.use(express.json());

// //import routes for TODO API
// const todoRoutes = require("./routes/todos");

// //mount the todo API routes
// app.use("/api/v1", todoRoutes);

// //start server
// app.listen(3000, () => {
//     console.log(`Server started successfully at ${PORT}`);
// })

// //connect to the database
// const dbConnect = require("./config/database");
// dbConnect();

// //default Route
// app.get("/", (req,res) => {
//     res.send(`<h1> This is HOMEPAGE baby</h1>`);
// })

// const express = require("express");

// const app = express()

// require("dotenv").config();

// const PORT = process.env.Port || 3000;
// app.use(express.json())

// const routes = require("./routes/todos")

// app.use("/api/v1",routes);

// app.listen(PORT ,()=>{
//     console.log("port number successful")
// })

// const dbConnect=require('./config/database')
// dbConnect();

// app.get("/",(req,resp)=>{
//     resp.send("<h1>hello Dosto</h1>")
// })

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
require("dotenv").config();

const Port = process.env.Port || 4000;

app.use(express.json());

const routes = require("./routes/todos");

app.use("/app/v1", routes);

const dbConnect = require("./config/database");
dbConnect();

app.listen(Port, () => {
  console.log(`${Port} chl pda bhai ye`);
});

app.get("/", (req, resp) => {
  resp.send("hello ji kais eho aap sbhi ");
});
