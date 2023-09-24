 
 const express= require("express");
const router = express.Router();
const  User = require("../models/User")

const {signUp, login} = require("../controllers/Auth")

const {auth, isStudent, isAdmin }= require("../middlewares/auth")

router.post("/signup", signUp);
router.post("/login", login);

// proteected routes 

router.get("/test", auth, (req,res) =>{
    res.json({
        success:true,
        message:'Welcome to the Protected route for TESTS',
    });
});

router.get("/student", auth ,isStudent ,(req,resp) =>{
    resp.json({
        success:true,
        message:"welcome to the protected routes fro students"
    })
})


router.get("/admin", auth ,isAdmin,(req,resp) =>{
    resp.json({
        success:true,
        message:"welcome to the protected routes for admin"
    })
})


router.get("/getEmail" , auth, async (req,res) => {

    try{
        const id = req.user.id;
        console.log("ID:" , id);
        const user = await User.findById(id);

        res.status(200).json({
            success:true,
            user:user,
            message:'Welcome to the email route',
        })
    }
    catch(error) {
        res.status(500).json({
            success:false,
            error:error.message,
            message:'Fatt gya code',
        })
    }

});

module.exports = router;