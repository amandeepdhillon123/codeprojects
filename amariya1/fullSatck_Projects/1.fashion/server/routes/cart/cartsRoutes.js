const express = require("express");
const router = express.Router();
const userauthenticate = require("../../middlewares/user/userAuthenticate")
// import controller 
const {AddtoCart} = require("../../controllers/cart/cartController");



// ----------------->>>>> carts routes <<<<-------------------
router.post("/addtocart/:id",userauthenticate,AddtoCart)



module.exports = router ;