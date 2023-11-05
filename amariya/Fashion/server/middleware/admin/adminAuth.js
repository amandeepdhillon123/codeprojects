require("dotenv").config();
const adminDB = require("../../model/admin/adminModel");
const jwt = require("jsonwebtoken");

exports.adminauthenticate = async(req,res,next)=>{
    try {
        const token = req.headers.authorization;
        //   console.log(token)

        const verifyToken = jwt.verify(token,process.env.JWT_SECRET);
        // console.log(verifyToken)
        
        const rootUser = await adminDB.findOne({_id:verifyToken._id});
        // console.log(rootUser)
        
        if(!rootUser){throw new Error("user not found")}

        req.token = token
        req.rootUser = rootUser
        req.userId = rootUser._id

        next();

    } catch (error) {
        res.status(400).json({error:"Unauthorized No token Provide"})
    }
}

