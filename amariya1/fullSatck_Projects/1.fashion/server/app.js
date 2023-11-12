require("dotenv").config();
const express = require("express");
const app= express();
const cors = require("cors")
const PORT = process.env.PORT || 8013;
const dbConnect = require("./db/conn");

// middlerware 
app.use(cors())
app.use(express.json())

// admin routes
const adminAuthroutes = require("./routes/admin/adminAuthroutes")
app.use("/adminauth/api",adminAuthroutes)

// product routes 
const productAuthroutes = require("./routes/products/productroutes")
app.use("/product/api", productAuthroutes)

// user routes 
const userAuthroutes = require("./routes/user/userRoutes");
app.use("/userauth/api",userAuthroutes)

// cart routes 
const cartAuthroutes = require("./routes/cart/cartsRoutes")
app.use("/carts/api",cartAuthroutes)


// databse connection 
dbConnect();

// middlerwares












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

