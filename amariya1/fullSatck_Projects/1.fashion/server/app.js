require("dotenv").config();
const express = require("express");
const app= express();
const cors = require("cors")
const PORT = process.env.PORT || 8013;
const dbConnect = require("./db/conn");



const adminAuthroutes = require("./routes/admin/adminAuthroutes")


// databse connection 
dbConnect();


// middlerwares
app.use(cors())
app.use(express.json())


// routes 
app.use("/adminauth/api",adminAuthroutes)



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

