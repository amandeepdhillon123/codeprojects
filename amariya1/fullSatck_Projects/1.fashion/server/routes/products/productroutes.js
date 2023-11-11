const express = require("express");
const router = express.Router();
const adminAuthenticate=require("../../middlewares/admin/adminauthentication")
const productupload = require("../../multerConfig/products/productStorageConfig")

// import category controller 
const { AddCategory, getCategory} = require("../../controllers/product/productConroller")

// import product controller
const {AddProduct,getAllProducts,getSingleProduct,getLatestProducts,DeleteProduct} =require("../../controllers/product/productConroller")



// ------------->>> categoty routes <<<---------------

router.post("/addcategory",adminAuthenticate,AddCategory)
router.get("/getcategory",getCategory)


// ---------------------->>>>  products routes <<<<<< ------------------------

router.post("/addProducts",[adminAuthenticate,productupload.single("productimage")],AddProduct)
router.get("/getAllProducts",getAllProducts)
router.get("/getsingleProduct/:productid",getSingleProduct)
router.delete("/products/:productid",adminAuthenticate,DeleteProduct);

//  get latest product
router.get("/getLatestProducts",getLatestProducts);


module.exports = router;