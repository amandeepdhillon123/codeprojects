// auth  for authenticate 

const jwt = require("jsonwebtoken")
require("dotenv").config();

exports.auth=(req,resp,next)=>{
    try {
        //  const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer","") ; 
          const token= req.header("Authorization").replace("Bearer","")
         if(!token)
         {
            return resp.status(401).json({
                success:false,
                message:"Token missing",
            })
         }
         try {
            const decode =jwt.verify(token,process.env.JWT_SECRET);
            req.user= decode
            console.log(decode)

            
         } catch (error) {
            return resp.status(401).json({
                 success:false,
                 message:"token is invalid"
            })
            
         }
        next();
    } catch (error) {
        return resp.status(401).json({
            success:false,
            message:"somethinf went wrong while verifyting the token"
       })
        
    }
}


// for authorizaton 


exports.isStudent=(req,resp,next)=>{
    try {
        if(req.user.role !== "Student"){
            return resp.status(401).json({
                success:false,
                message:"this is a protected routes for students"
            })

        }
        next();  
        
    } catch (error) {
        return resp.status(500).json({
            success:false,
            message:"user role is not mathcing"
        })
        
    }

}

exports.isAdmin=(req,resp,next)=>{
    try {
        if(req.user.role !== "Admin"){
            return resp.status(401).json({
                success:false,
                message:"this is a protected routes for Admin"
            })

        }
        next();  
        
    } catch (error) {
        return resp.status(500).json({
            success:false,
            message:"user role is not mathcing"
        })
        
    }

}