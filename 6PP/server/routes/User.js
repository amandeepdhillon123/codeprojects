

const express = require("express");

const router = express.Router();

const {auth} = require("../middlewares/auth")

const {login, logout , getUser,myProfile}= require("../controllers/User")

router.post("/login",login)
router.get("/logout",logout)
router.get("/getuser",getUser)


// protected routes

router.get("/me", auth ,myProfile)
 


module.exports = router;

