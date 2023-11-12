require("dotenv").config();
const nodemailer =require("nodemailer")

// email config 

exports.transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.USER_EMAIL,
        pass:process.env.USER_PASS
    }
})