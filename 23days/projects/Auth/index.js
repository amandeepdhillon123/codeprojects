  const express = require("express");
  require("dotenv").config();
  const app =express(); 

  const cookieParser = require("cookie-parser");
   app.use(cookieParser());

  app.use(express.json());

  require("./config/databse").dbConnect()

  const router = require("./routes/user")

  app.use("/api/v1",router)

  const PORT = process.env.PORT || 3000;

  app.listen(PORT,()=>{
    console.log(`server started at PORT at ${PORT}`)
  })
