   
   const express = require("express");
  const app= express();

  require("dotenv").config();

  const PORT = 5000 ;

  app.use(express.json());

  const todoRoutes = require("./routes/todo")

  app.use("/api/v1",todoRoutes)

  

  const dbConnect= require("./config/database")
  dbConnect();

  app.listen(PORT,()=>{
    console.log(`server started successfully at ${PORT}`)
  })
