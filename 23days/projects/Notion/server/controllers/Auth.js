const User= require('../models/User');
const OTP = require("../models/OTP")
const otpGenerator= require("otp-generator")
const bcrypt = require("bcrypt")


// send otp 

 exports.sentOTP = async(req,resp)=>{
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

        console.log("PTP generated",otp)
         
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
        //    data fecth from requrest body
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
            message:"Password and confiemt Password Value Does not Match ,please try again"
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
    elseif(otp !== recentOtp.otp)
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
    // user check exist or not 
    //  generate JWT ,after passwrod mtahcing,
    // create cookie 


    
   } catch (error) {
    
   }
    }
