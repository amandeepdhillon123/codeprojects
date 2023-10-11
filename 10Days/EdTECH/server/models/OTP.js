const mongoose = require("mongoose");
const nodemailer = require("../utils/mailSender");
const mailsender = require("../utils/mailSender");

const OTPSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default: Date.now(),
        expires:5*60
    }
})

// function send to emails

async function sendVerificationEmail(email,otp) {
    try {
        const mailResponse= await mailsender(email, "verfication Email from studynotion" , otp)
        console.log("Email sent successfully" , mailResponse)
    } catch (error) {
        console.log("error occured while sneding mails" , error)
        throw error;
    }
}


OTPSchema.pre("save", async function(next){
    await sendVerificationEmail(this.email, this.otp)
    next()
})

module.exports = mongoose.model("OTP",OTPSchema)