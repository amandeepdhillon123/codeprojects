const express = require("express");
const router = express.Router();
const userAuthenticate =require("../../middlewares/user/userAuthenticate")
const userUpload =require("../../multerConfig/user/userStorageConfig")
// ---------->>>>> import user controller <<<<<<<<<-------

const {userRegister ,LogIn, userverify, Logout, forgotpassword} = require("../../controllers/user/userController");


// user Auth routes
router.post("/register",userUpload.single("user_profile"),userRegister)
router.post("/login",LogIn)

router.get("/userloggedin",userAuthenticate, userverify);
router.get("/logout", userAuthenticate, Logout)


router.post("/forgotpassword",forgotpassword);









module.exports =router;