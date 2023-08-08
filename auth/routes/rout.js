

const express = require("express");

const router = express.Router();

const {createSign,login}= require("../controller/auth");
const{auth,isStudent,isAdmin}= require("../middleware/middle")


router.post('/sign',createSign)
router.post('/login',login)

router.get("/test", auth, (req,res) =>{
    res.json({
        success:true,
        message:'Welcome to the Protected route for TESTS',
    });
});

router.get("/student", auth, isStudent, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Students',
    });
} );

router.get("/admin", auth, isAdmin, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Admin',
    });
});

module.exports = router