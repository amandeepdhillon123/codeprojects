const mongoose = require("mongoose");

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
        default:Date.now(),
        expires:5*60,
    }
  
});

async function sendVerificationEmail(email,otp){
    try {
         const mailResponse = await mailerSender(email, "Verification Email from Ed_Tech", otp)
         console.log("Email sent success",mailResponse);
        
    } catch (error) {

        console.log("error occured while sending mail sender" , error)

        throw error ;
        
    }
}

//  middle ware

OTPSchema.pre("save", async function(next){
    await sendVerificationEmail(this.email, this.otp)
    next();
})

module.exports = mongoose.model("OTP", OTPSchema);
