
const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt =require("jsonwebtoken")
require("dotenv").config()
exports.users =async(req,resp)=>{
    try {
        const{name,password,email,role}=req.body

        const existingUser = await User.findOne({email})

        if(existingUser)
        {
            return resp.status(400).json({
                success:false,
                message:"alredy exiting user"
            })
        }

        let hashedPassword;

        try {

            hashedPassword = await bcrypt.hash(password,10)

         
            
        } catch (error) {
            return resp.status(400).json({
                success:false,
                message:"password worng"
            })
            
        } 

        const user = await User.create({name,email,password:hashedPassword,role})


        return resp.status(200).json({
            success:true,
            message:"user created"
        })





} catch (error) {

    console.log(error)
    return resp.status(200).json({
        success:true,
        message:"error in signup"
    })
    
}
    
    
}

exports.login= async(req,resp)=>{
    try {
        const{email,password} =req.body

     if(!email || !password)
     {
        return resp.status(400).json({
            success:true,
            message:"[lease fill all the details"
        })
     }

     const user = await User.findOne({email})

     if(!user)
     {
        return resp.status(401).json({
            success:false,
            message:"user is not registered"
        })
     }
     const payload ={
        email:user.email,
        id:user._id,
        role:user.role
     }
     if(await bcrypt.compare(password,user.password))
     {
         let token =jwt.sign(payload,process.env.JWT_SECRET,{
             expiresIn:"2h",
         });

        //  user= user.toObject();
         user.token= token;
         user.password=undefined
         const options={
               expiresIn: new Date(Date.now + 3 * 24 * 60 * 60 * 1000),
               httpOnly:true,
         }

         resp.cookie("token",token,options).status(200).json({
            success:true,
            token,
            user,
            message:"user logged in succeefully"
         });
     }
     else{
        return resp.status(401).json({
            success:false,
            message:"password  not matched"
        })
     }
        
    } catch (error) {
        console.log(error)
        return resp.status(500).json({
            success:false,
            message:"Password incoorect"

        })
        
    }
}