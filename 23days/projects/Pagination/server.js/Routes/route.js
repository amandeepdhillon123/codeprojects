

const express = require("express");

const router = express.Router();
const upload= require("../multerconfig/storageConfig")
const {userpost} = require("../Controllers/userController")
// route handler 

// routes
router.post("/user/register",upload.single("user_profile"),userpost)



module.exports = router
