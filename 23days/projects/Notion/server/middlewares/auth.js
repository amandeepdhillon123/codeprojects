  
  const jwt =require("jsonwebtoken");
   require("dotenv").config();
   const User= require("../models/User")

//   auth
       
    exports.auth= async(req,resp,next)=>{
          try {
            //   extract token

        const token= req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer","");

       //    if token missing, then return message 

            if(!token) {
                return resp.status(401).json({
                    success:false,
                    message:"Token is missing"
                })
            }

            // verify the token 
            try {
                const decode =  jwt.verify(token,process.env.JWT_SECRET);
                cosnole.log(decode)
                req.user=decode
                
            } catch (error) {
                //   verification issue 
                return resp.status(401).json({
                    success:false,
                    message:"token is invalid"
                })
            }
            next();
            
          } catch (error) {
            return resp.status(401).json({
                success:false,
                message:"something went wronf while validating the token"
            })
          }

        
    }

// isStudent,
     
        exports.isStudent= async(req,resp,next)=>{
            try {
                if(req.user.accountType !== "Student"){
                    return resp.status(401).json({
                        success:false,
                        message:"This is protected routes for Student ONly"
                    })
                }
                next();
                
            } catch (error) {
                return resp.status(500).json({
                    success:false,
                    message:"User role can not be varified, please try again"
                })
            }
        }
     
// isInstructor,

        exports.isInstructor= async(req,resp,next)=>{
            try {
                if(req.user.accountType !== "Instructor"){
                    return resp.status(401).json({
                        success:false,
                        message:"This is protected routes for Instrcutor Only"
                    })
                }
                next();
                
            } catch (error) {
                return resp.status(500).json({
                    success:false,
                    message:"User role can not be varified, please try again"
                })
            }
        }

// isAdmin
            exports.isAdmin= async(req,resp,next)=>{
                try {
                    if(req.user.accountType !== "Admin"){
                        return resp.status(401).json({
                            success:false,
                            message:"This is protected routes for Admin Only"
                        })
                    }
                    next();
                    
                } catch (error) {
                    return resp.status(500).json({
                        success:false,
                        message:"User role can not be varified, please try again"
                    })
                }
            }