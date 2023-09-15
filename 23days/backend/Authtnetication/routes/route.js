
const express= require("express")
const router = express.Router();

// controller 


const {signUp,login}= require("../controllers/Auth")
const{auth,isStudent,isAdmin} = require("../middleware/auth")
// routes

router.post("/signUp",signUp)
router.post("/login",login)


// protected routes 

router.get('/student',auth,isStudent,(req,resp)=>{
    resp.json({
        success:true,
        message:"welcome to the protected route for students",
    })

})


router.get('/admin',auth,isAdmin,(req,resp)=>{
    resp.json({
        success:true,
        message:"welcome to the protected route for admin",
    })

})
module.exports= router;

