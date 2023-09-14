const mongoose = require("mongoose")
const mailSender = require("../utils/mailSender")

const OTPSchema = new mongoose.Schema({   
   
    email:{
        type:String,
        required:true,

    },
    otp:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:5*60,
    }
})

 async function sendVerificationEmail(email,otp){
    try {
   const mailResponse=await mailSender(email,"verification Email from Edtech",otp);

   console.log("Email sent successfully:", mailResponse)
        
    } catch (error) {
        console.log("error occured while sending mails:",error)
        throw error;
    }
 }

OTPSchema.pre("save",async function(){

    await sendVerificationEmail(this.email,this.otp)
    next();

})
module.exports = mongoose.model("OTP",OTPSchema)