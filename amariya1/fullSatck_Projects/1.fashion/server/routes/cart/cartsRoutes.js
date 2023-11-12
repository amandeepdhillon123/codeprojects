const express = require("express");
const router = express.Router();
const userauthenticate = require("../../middlewares/user/userAuthenticate")
// import controller 
const {AddtoCart , getCartValue ,removeSingleiteam, removeAlliteam, DeleteCartsData} = require("../../controllers/cart/cartController");



// ----------------->>>>> carts routes <<<<-------------------
router.post("/addtocart/:id",userauthenticate,AddtoCart)
router.get("/getcarts",userauthenticate,getCartValue)
router.delete("/removesingleitem/:id",userauthenticate, removeSingleiteam)
router.delete("/removeiteams/:id",userauthenticate,removeAlliteam)


// delete cart data when order done
router.delete("/removecartdata",userauthenticate,DeleteCartsData)
module.exports = router ;