const express = require("express")
const router = express.Router();
const upload = require("../multerconfig/storageConfig")

// routes handeler

const {userpost} =require("../controllers/register");

router.post("/user/register",upload.single("user_profile"),userpost)


  

// routes 






module.exports = router