
const bcrypt = require("bcrypt");

const User =require("../models/Authenticate");
const jwt = require("jsonwebtoken")
require("dotenv").config();

exports.signUp =async(req,resp)=>{
    try {

        const {name,email,password,role} = req.body;

        const existingUser =await User.findOne({email});

        if(existingUser){
             
        }

        let hashedPassword;
        try {
            hashedPassword= await bcrypt.hash(password,10);

            
        } catch (error) {
             return resp.status(500).json({
                success:false,
                message:"Error in hashing Password"
             })
        }

        const user= await User.create({
            name,email,password:hashedPassword,role
        })

        return resp.status(200).json({
            success:true,
            message:"User created successfully"
        })
        
    } catch (error) {
        return resp.status(500).json({
            success:false,
            message:"Iser cannot be  registered, plz try agaisn later"
         })
        
    }
}

// login method 

exports.login=async(req,resp)=>{
    try {

        const {email,password}= req.body;
        if(!email || !password){
            return resp.status(400).json({
                success:true,
                message:"please fill all the details carefully"
            })
        }
        let user = await User.findOne({email})

        if(!user){
            return resp.status(401).json({
                success:true,
                message:"User is not registered"
            })
        }
          
        const payload={
            email:user.email,
            id:user._id,
            role:user.role,
        }

        if(await bcrypt.compare(password,user.password)){
      
        let token = jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:"2h"
        });

        //  console.log(user)
        // user=user.toObject();
        // console.log(typeof(user))
        // user.token=token,
        // console.log(user)
        // user.password= undefined

        // const olduser={...user,token}
        // olduser.password=undefined

        // user.token = olduser.token

        // console.log(user)

         user = user.toObject();
         user.token=token;
         user.password=undefined

        // const options ={

        //     expiresIn:new Date( Date.now() + 3*24*60*60*1000),
        //     httpOnly:true,

        // }  
        // 

        // resp.cookie("token",token,options).status(200).json({
        //     success:true,
        //     token,
        //     user,
        //     message:"user logged in successfully"

        // })

        resp.status(200).json({
            success:true,
            token,
            user,
            message:"user logged in successfully"

        })

        }
        else
        {
            return resp.status(403).json({
                success:false,
                message:"Password incorrect"

            })
        }


        
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            success:false,
            message:"login failure"
        })
        
    }
}



