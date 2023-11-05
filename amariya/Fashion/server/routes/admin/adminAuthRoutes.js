

const express = require("express");
const router =express.Router();
const adminUpload =require("../../multerConfig/admin/adminStorage")
const {Register ,Login, AdminVerify, Logout}= require("../../controllers/admin/adminController")
const {adminauthenticate}= require("../../middleware/admin/adminAuth")

router.post("/register",adminUpload.single("admin_profile"),Register)
router.post("/login",Login)
router.get("/logout",adminauthenticate,Logout)
// admin verify 
router.get("/adminverify",adminauthenticate,AdminVerify);



module.exports = router
