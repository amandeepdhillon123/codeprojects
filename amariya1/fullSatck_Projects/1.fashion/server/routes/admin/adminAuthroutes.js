const express = require("express");
const route = express.Router();

// Import the Controllers 
const {Register} = require("../../controllers/admin/adminController")


// admin routes for register
route.post("/register", Register)





module.exports = route;
