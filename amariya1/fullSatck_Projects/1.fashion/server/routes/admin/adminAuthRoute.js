const express = require("express");
const router  = express.Router();
const adminUpload = require("../../multerConfig/admin/adminStorage")
const {Register} = require("../../controllers/admin/adminController")

// admin routes
router.post("/register",adminUpload.single("admin_profile"),Register)




module.exports = router;