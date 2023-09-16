const User= require('../models/User');
const OTP = require("../models/OTP")
const otpGenerator= require("otp-generator")
const bcrypt = require("bcrypt")
const jwt =require("jsonwebtoken")
require("dotenv").config();


// send otp 

 exports.sendOTP = async(req,resp)=>{
    try {

        // fetchdata from request body
         const {email}= req.body;

        //  check if user alerady exist

        const checkUserPresent= await User.findOne({email});

        //  if user already exist, then return a response

        if(checkUserPresent){
            return resp.status(401).json({
                success:false,
                message:"User is already registered"
            })
        }

        // generate OTP

        var otp= otpGenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false
        })

        console.log("OTP generated",otp)
         
        // check unique otp or not 

        const result = await OTP.findOne({otp:otp});

        while(result){
            var otp= otpGenerator.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false
            })
             result = await OTP.findOne({otp:otp});
            }

            const otpPayload= {email,otp}
            // create an entry in db for otp 

            const otpBody= await OTP.create(otpPayload);
            console.log(otpBody)

            // return response successful 

            resp.status(200).json({
                success:true,
                message:"OTP sent Successfully",
                otp
            })

        
    } catch (error) {

        console.log(error);
        return resp.status(500).json({
            success:false,
            message:error.message,
        })
        
    }
 };



   //  signup

   exports.signUp= async(req,resp)=>{
    try {
        //    data fecth from request body
    const{firstName,
        lastName,
        email,
        password,
        confirmPassword,
        accountType,
        contactNumber,
        otp
    }= req.body

    // validation  kro

    if(  !firstName || !lastName || !email ||  !password  || !confirmPassword ||  !otp)
    {
        return resp.status(403).json({
             success:false,
             message:"All fields are required"
        })
    }

    //  2 password match
    
    if(password !== confirmPassword){
        return resp.status(400).json({
            success:false,
            message:"Password and confirmt Password Value Does not Match ,please try again"
        })
    }
    // check user alerady exist or not

    const existingUser= await User.findOne({email});
    if(existingUser){
        return resp.status(400).json({
            success:false,
            message:"User is already registered"
        })
    }
    // find most recent otp stored for the user

    const recentOtp = await OTP.find({email}).sort({createdAt:-1}).limit(1);
    console.log(recentOtp)

    // validate OTP 
    if(recentOtp.length == 0){
        // OTP not found 

        return resp.status(400).json({
            success:false,
            message:"OTP not found"
        })
    }
    else if(otp !== recentOtp.otp)
    {
        // Invalid OTP
        return resp.status(400).json({
            success:true,
            message:"invalid OTP"
        });
    }

    // hash password 

     const hashedPassword= await bcrypt.hash(password,10)

    // entry create Db 
    const profileDetails= await Profile.create({
        gender:null,
        dateOfBirth:null,
        about:null,
        contactNumber:null
    })

    const user= await User.create({
        firstName,
        lastName,
        email,
        contactNumber, 
        password:hashedPassword,
        accountType,
        additionalDetails:profileDetails._id,
        image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`
    })

    // return response 

     return resp.status(200).json({
        success:true,
        message:"User is already registered successfully",
        user
     })
        
    } catch (error) {
          console.log(error);
          return resp.status(500).json({
            succes:false,
            message:"User cannot be registered, plesae try again"
          })
    }
    
    }



    // login

            exports.login= async(req,resp)=>{
        try {

    // get data from req body
        const {email,password} =req.body;
    
    // validation data 

        if(!email || !password) {

            return resp.status(403).json({
                success:false,
                message:"All fields are required, plese try again"
            })
        }

    // user check exist or not 

        const user = await User.findOne({email}).populate("additionalDetails")
        console.log(user)
        if(!user) {
            return resp.status(401).json({
                success:false,
                message:"User is not registered, please signup first",
            })
        }
    

    //  generate JWT ,after passwrod matching,

    if(await bcrypt.compare(password,user.password) ) {
        const payload={
            email:user.email,
            id:user._id,
            accountType:user.accountType
        }
        const token = jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:"2h"
        })
        user.token=token;
        user.password=undefined
   
    // create cookie 
            const options ={
                expires: new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true
            }
                resp.cookie("token",token,options).status(200).json({
                    success:true,
                    token,
                    user,
                    message:"logged in successfully"
                })
            }
            else{
                return resp.status(401).json({
                    success:false,
                    messsage:"Password is incorrect"
                })
            }

                
            } catch (error) {
                console.log(error);
                return resp.status(500).json({
                    success:false,
                    message:"log in Failure, plesae try again",
                })
                
            }
                }


// change password 
    
        exports.changePassword=async(req,resp)=>{
            // get data from requrest body
            // get old password , newPassword, confirmPassword,
            // validation
            // upload pwd in Db
            // send mail -- Password Updated
            // return response
        }   
