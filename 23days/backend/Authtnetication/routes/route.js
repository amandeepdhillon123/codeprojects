
const express= require("express")
const router = express.Router();

// controller 


const {signUp}= require("../controllers/Auth")
// routes

router.post("/signUp",signUp)

module.exports= router;

