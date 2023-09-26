
const jwt = require("jsonwebtoken")
const User =require("../models/userSchema")
require("dotenv").config();


exports.auth = async(req,resp)=>{
    try {
          
        const token = req.headers.authorization;
        // console.log(token)

        if(!token || token === undefined) {
            return resp.status(401).json({
                success:false,
                message:'Token Missing',
            });
        }
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            // console.log(payload);
            //why this ?
            req.user = payload;
            // console.log(req.user)
            
        } catch (error) {
            return resp.status(401).json({
                success:false,
                message:'token is invalid',
            });
            
        }
       
        
    } catch (error) {
        return resp.status(401).json({
            status:401,
            success:false,
            message:'Something went wrong, while verifying the token',
            error:error.message,
        });
        
    }

}

// for valid user 

exports.validuser =async(req,resp,next) => {
//   console.log("done")

try {
    const ValidUser = await User.findOne({_id:req.user.id})
   
    resp.status(201).json({
        status:201,
        ValidUser,
        success:true,
        message:'THis is a protected route for valid user',
    });
    next()
} catch (error) {
    return resp.status(401).json({
        status:401,
        ValidUser,
        success:false,
        message:'User Role is not matching',
    })
    
}

}





exports.logout = async(req,resp) => {
    //   console.log("done")
    
    try {
           
        console.log(req.user.tokens)

      
    } catch (error) {
        // return resp.status(401).json({
        //     status:401,
        //     // ValidUser,
        //     success:false,
        //     message:'User Role is not matching',
        //     error:error.message
        // })
        
    }
    
    }