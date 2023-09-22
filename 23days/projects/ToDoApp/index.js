  

  const express = require("express");
  const app= express();

  require("dotenv").config();

  const PORT = process.env.PORT || 5004 ;

  app.use(express.json());

  const todoRoutes = require("./routes/todo")

  app.use("/api/v1",todoRoutes)

  app.listen(PORT,()=>{
    console.log(`server started successfully at ${PORT}`)
  })

  const dbConnect= require("./config/database")
  dbConnect();
