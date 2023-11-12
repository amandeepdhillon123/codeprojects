const express = require("express");
const router = express.Router();
const userauthenticate = require("../../middlewares/user/userAuthenticate")
// import controller 
const {AddtoCart , getCartValue ,removeSingleiteam} = require("../../controllers/cart/cartController");



// ----------------->>>>> carts routes <<<<-------------------
router.post("/addtocart/:id",userauthenticate,AddtoCart)
router.get("/getcarts",userauthenticate,getCartValue)
router.delete("/removesingleitem/:id",userauthenticate, removeSingleiteam)

module.exports = router ;