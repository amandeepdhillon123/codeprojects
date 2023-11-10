const express = require("express");
const route = express.Router();
const adminUpload =require("../../multerConfig/admin/adminStorageConfig")
// Import the Controllers 
const {Register} = require("../../controllers/admin/adminController")


// admin routes for register
route.post("/register",adminUpload.single("admin_profile"),Register)





module.exports = route;
