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

exports.signUp = async(req,resp) =>{
    try {

        // data fetch from req body

        const{ firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType,
            contactNumber,
            otp
        } = req.body;

        // validation 

        if(!firstName || !lastName || !email || !password || !confirmPassword || !otp){
            return resp.status(403).json({
                success:false,
                message:"All fields are required"
            })
        }

        // 2 password match 

        if(password !== confirmPassword){
            return resp.status(400).json({
                success:false,
                message:"Password and confirmPasswrod do not macth"
            });
        }

        //  check user laready exist or not 

        const existingUser = await User.findOne({email});

        if(existingUser){
            return resp.status(400).json({
                success:false,
                message:"User is already registered"
            })
        }

        // find most recent otp 

        const recentOtp =await OTP.find({email}).sort({createdAt:-1}).limit(1);

        console.log(recentOtp)

        // validate otp 

        if(recentOtp.length == 0){
            return resp.status(400).json({
                success:false,
                message:"OTP not found"
            })
        } else if( otp !== recentOtp.otp){
             return resp.status(400).json({
                success:false,
                message:"Invalid OTP"
             })
        }

        // Hash Password

        const hashedPassword = await bcrypt.hash(password, 10);

        // entry create in DB 

        const profileDetails =await profile.create({
            gender:null,
            dateOfBirth:null,
            about:null,
            contactNumber:null
        })

        const user = await user.create({

            firstName,
            lastName,
            email,
            contactNumber,
            password:hashedPassword,
            accountType,
            additionalDetails:profileDetails._id,
            image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,

        });

        return resp.status(200).json({
            success:true,
            message:"User is registered successfully",
            user
        })

        
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            success:false,
            message:"User can not be registered. Please try again"
        })
    }
}

// login 

exports.login= async(req,resp) =>{
    try {
        //  fetch data from reqbody
         
        const {email,password } = req.body;

        // vaildation data 

        if(!email || !password){
            return resp.status(403).json({
             success:false,
             message:"All fields are required, please try again"
            })
        }

        // check user exist or not 

        const user =  await User.findOne({email}).populate("additonalDetails")
        
        if(!user){
            return resp.status(401).json({
                successfalse,
                message:"USer is not registered ,please signup first"
            })
        }

        // generate JWT after password matching 

        if(await bcrypt.compare(password, user.password)){
            const payload={
                email:user.email,
                id:user_id,
                accountType:user.accountType
            }

            const token = jwt.sign(payload, process.env.JWT_SECRET,{
                 expiresIn:"2h"
            })

            user.token =token;
            user.password =undefined

            // create cookie and send response 

            const options= {
                expires: new Date(Date.now) + 3*24*60*60*1000,
                httpOnly,
            }

            resp.cookie("token",token, options).status(200).json({
                success:true,
                token,
                user,
                message:"Logged in successfully",
            })
        }
        else{
             return resp.status(401).json({
                successfalse,
                message:"Passwrod is incorrect"
             })
        }
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            success:false,
            message:"login failure, plesae try again"
        })
    }
}