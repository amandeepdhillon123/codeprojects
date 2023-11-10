require("dotenv").config();
const express = require("express");
const app= express();
const cors = require("cors")
const PORT = process.env.PORT || 8013;
const dbConnect = require("./db/conn");


// databse connection 
dbConnect();


// middlerwares
app.use(cors())
app.use(express.json())



// start server 
app.listen(PORT,()=>{
    console.log(`server starts at port no. ${PORT}`)
})

// default server 
app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

