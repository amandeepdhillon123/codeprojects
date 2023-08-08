const Post = require("../model/sign")
const bcrypt = require("bcrypt")
const jwt =require("jsonwebtoken")
require("dotenv").config()

// exports.createSign = async(req,resp)=>{
//     try {
//         //    get data
//         const{name,email,password,role} = req.body;

//         //  already exit 

//         const existingUser = await Post.findOne({email})

//         if(existingUser)
//         {
//             return resp.status(400).json({
//                 success:false,
//                 message:"user is already exist"
//             })
//         }

//         // secure password 
//    let hashedpassword;
//         try {

//             hashedpassword = await bcrypt.hash(password,10)
            
//         } catch (error) {
//              resp.status(500).json({
//                 sucess:false,
//                 message:"internal server error",
//                 error:error.message
//              })
//         }

//         const user = await Post.create({name,email,password:hashedpassword,role})

//         resp.status(200).json({
//             success:true,
//             message:"succeesful entry",
//             data:user
//         })


        
//     } catch (error) {

//         resp.status(500).json({
//             sucess:false,
//             message:"internal server error",
//             error:error.message
//          })
        
//     }
// }

exports.createSign=async(req,resp)=>{
    try {
        // get data 
        const{name,email,password,role} = req.body;

        const existingUser = await Post.findOne({email})
     
        // check already exist 
        if(existingUser)
        {
            return resp.status(400).json({
                success:false,
                message:"user is already exist",
                error:error.message
            })
        }

        let hashedpassword;

        try {
             
            hashedpassword = await bcrypt.hash(password,10)
            console.log(hashedpassword)
        } catch (error) {
              resp.status(500).json({
                success:true,
                message:"internal server ",
                error:error.message
              })
        }

        const user = await Post.create({name,email,password:hashedpassword,role})

          resp.status(200).json({
            success:true,
            data:user,
            message:"entry successful"
          })
    } catch (error) {
        resp.status(500).json({
            success:false,
            message:"internal server error",
            error:error.message
          })
        
    }
}


exports.login = async(req,resp) =>{

    console.log(req.body)
    try {
        const {email,password}= req.body;

        
        // empty
      if(!email || !password)
      {
        return resp.status(400).json({
            success:false,
            error:error.message,
            message:"plessemfill all data"
        })
      }

        //    check user is aready exist or not 
      let user =await Post.findOne({email})
      if(!user)
      {
        return resp.status(401).json({
            success:false,
            error:error.message,
            message:"user is laready is existe"
        })
      }
      const payload={
        email:user.email,
        id:user._id,
        role:user.role
      }

      if( await bcrypt.compare(password,user.password))
      {
           let token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"2h"});
             
           user = user.toObject()
           user.token= token,
           user.password=undefined

           const options ={
            httpOnly:true,
            expiresIn:new Date(Date.now()+ 3*24*60*60*1000)

           }
          
          return resp.cookie("token",token,options).status(200).json({
               success:true,
               token,
               user,
               message:"login suceesful"
           })
      }
    } catch (error) {
        resp.status(500).json({
            success:false,
            error:error.message,
            message:"inertenal server srror"
        })
        
    }
}