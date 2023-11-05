const express = require("express");
const router = express.Router();
const productupload = require("../../multerConfig/products/productStorage")



const {adminauthenticate} = require("../../middleware/admin/adminAuth")
const {AddCategory, GetCategory, AddProducts,getAllProducts,getSingleProduct,getLatestProducts,DeleteProducts} = require("../../controllers/product/productController")

// product category routes 
router.post("/addcategory",adminauthenticate,AddCategory)
router.get("/getcategory",GetCategory)



// products routes 
router.post("/addProducts",[adminauthenticate,productupload.single("productimage")],AddProducts)
router.get("/getProducts",getAllProducts);
router.get("/getsingleProduct/:productid",getSingleProduct);
router.delete("/products/:productid",adminauthenticate,DeleteProducts)



// new arrival 
router.get("/getLatestProducts",getLatestProducts)

module.exports =router;