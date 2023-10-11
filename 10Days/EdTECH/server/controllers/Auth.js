const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt=  require("jsonwebtoken")
require("dotenv").config()



// send OTP 

exports.sendOTP = async(req,resp) =>{
    try {
        // fetch data 

        const {email} =req.body;

        // check if user is already exist ro not 

        const checkUserPresent = await User.findOne({email});

        // if user is alaready exist , then send respond
        
        if(checkUserPresent){
            return resp.status(401).json({
                success:false,
                message:"User is already exist"
            })
    
        }

        // generate otp 

        var otp = otpGenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false
        })
        console.log("OTP generated" , otp)

        // check unique or not 
        let result =await OTP.findOne({otp:otp})
        while(result){
             otp = otpGenerator.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false
            
        })
        result =await OTP.findOne({otp:otp})
       }


       const otpPayload= {email,otp};

    //    create entry into db 

        const otpBody =await OTP.create(otpPayload);
        console.log(otpBody)


        resp.status(200).json({
            success:true,
            message:"OTP Sent successfully",
            otp
        });
      
    
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            success:false,
            message:error.message
        })
    }
}

//  sign up