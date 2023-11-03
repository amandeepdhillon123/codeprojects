

const express = require("express");
const router =express.Router();

const {Register}= require("../../controllers/admin/adminController")

router.post("/register",Register)

module.exports = router
