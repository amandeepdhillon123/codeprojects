
const express =require("express");
const router =express.Router();
const adminUpload =require("../../multerconfig/admin/adminStorageConfig")
const {Register} =require("../../controllers/admin/adminControllers")

// admin auth routes 
router.post("/register",adminUpload.single("admin_profile"),Register)













module.exports =router

