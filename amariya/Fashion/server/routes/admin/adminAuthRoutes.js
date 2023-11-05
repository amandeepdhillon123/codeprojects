

const express = require("express");
const router =express.Router();
const adminUpload =require("../../multerConfig/admin/adminStorage")
const {Register ,Login}= require("../../controllers/admin/adminController")

router.post("/register",adminUpload.single("admin_profile"),Register)
router.post("/login",Login)

module.exports = router
