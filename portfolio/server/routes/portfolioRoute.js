const express = require("express");
const router = express.Router();

// routes handkler 
const { sendEmailController } = require("../controllers/portfolioContoller");




//routes
router.post("/sendEmail", sendEmailController);

// /export
module.exports = router;