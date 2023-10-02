const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const Profile = require("../models/Profile");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// send otp

exports.sendOTP = async (req, resp) => {
  try {
    // fetch data from email
    const { email } = req.body;

    // check if user aleready exiast or not
    const checkUserPresent = await User.findOne({ email });

    // if user already exist then send response
    if (checkUserPresent) {
      return resp.status(401).json({
        success: false,
        message: "User is already registered",
      });
    }

    //generate otp
    var otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    console.log("OTP generated: ", otp);

    // check unit or not
    let result = await OTP.findOne({ otp: otp });

    while (result) {
      otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      result = await OTP.findOne({ otp: otp });
    }
    const otpPayload = { email, otp };
    //    create an entry into db
    const otpBody = await OTP.create(otpPayload);

    console.log(otpBody);

    // retrun respone successfully
    resp.status(200).json({
      success: true,
      message: "OTP sent successfully",
      otp,
    });
  } catch (error) {
    console.log(error);
  }
};

//signup

exports.signUp = async (req, resp) => {
  try {
    //  data fetchinf from req body
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      contactNumber,
      otp,
    } = req.body;

    //  validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !otp
    ) {
      return resp.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    // password  and confirm pass match
    if (password !== confirmPassword) {
      return resp.status(400).json({
        success: false,
        message: "Password and COnfirmPassword Value match",
      });
    }

    // checnk user already exist or not
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return resp.status(400).json({
        success: false,
        message: "User is already registered",
      });
    }

    // find most recent otp stored forn the user
    const recentOtp = await OTP.find({ email }).sort(
      { createdAt: -1 },
      limit(1)
    );
    console.log(recentOtp);

    if (recentOtp.length == 0) {
      // otp not foumd
      return resp.status(400).json({
        success: false,
        message: "OTP Found",
      });
    } else if (otp !== recentOtp.otp) {
      //    invalid otp
      return resp.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      contactNumer: null,
    });

    const user = await User.create({
      firstName,
      lastName,
      email,
      contactNumber,
      password: hashedPassword,
      accountType,
      additionalDetails: profileDetails._id,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstname} ${lastName}`,
    });

    //return res
    return resp.status(200).json({
      success: true,
      message: "User is registered Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return resp.status(500).json({
      success: false,
      message: "User cannot be registrered. Please try again",
    });
  }
};


// login

  //Login
exports.login = async (req, resp) => {
    try {
        //get data from req body
        const {email, password} = req.body;
        // validation data
        if(!email || !password) {
            return resp.status(403). json({
                success:false,
                message:'All fields are required, please try again',
            });
        }
        //user check exist or not
        const user = await User.findOne({email}).populate("additionalDetails");
        if(!user) {
            return resp.status(401).json({
                success:false,
                message:"User is not registrered, please signup first",
            });
        }
        //generate JWT, after password matching
        if(await bcrypt.compare(password, user.password)) {
            const payload = {
                email: user.email,
                id: user._id,
                accountType:user.accountType,
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn:"2h",
            });
            user.token = token;
            user.password= undefined;

            //create cookie and send response
            const options = {
                expires: new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true,
            }
            resp.cookie("token", token, options).status(200).json({
                success:true,
                token,
                user,
                message:'Logged in successfully',
            })

        }
        else {
            return resp.status(401).json({
                success:false,
                message:'Password is incorrect',
            });
        }
        
    }
    catch(error) {
        console.log(error);
        return resp.status(500).json({
            success:false,
            message:'Login Failure, please try again',
        });
    }
};


// //changePassword
//TODO: HOMEWORK
exports.changePassword = async (req, res) => {
    //get data from req body
    //get oldPassword, newPassword, confirmNewPassowrd
    //validation

    //update pwd in DB
    //send mail - Password updated
    //return response
}
