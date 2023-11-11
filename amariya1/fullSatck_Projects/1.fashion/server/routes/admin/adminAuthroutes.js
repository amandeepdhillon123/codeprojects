const express = require("express");
const route = express.Router();
const adminUpload =require("../../multerConfig/admin/adminStorageConfig")
const adminAuthenticate=require("../../middlewares/admin/adminauthentication")


// Import the Controllers 
const {Register,LogIn ,getAdmin,Logout} = require("../../controllers/admin/adminController")


// admin routes for register
route.post("/register",adminUpload.single("admin_profile"),Register)

// admin routes for login
route.post("/login",LogIn)

// adminverify
route.get("/adminverify",adminAuthenticate,getAdmin)

// logout

route.get("/logout",adminAuthenticate,Logout)





module.exports = route;
