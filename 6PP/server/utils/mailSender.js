
require("dotenv").config()
const nodemailer= require("nodemailer")
const mailSender = async( text ) =>{
    try {
       
       let transporter = nodemailer.createTransport({
        host:process.env.MAIL_HOST ,
        
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
          }
       });

       let info = await transporter.sendMail({
           subject:"CONTACT REQUEST FROM PORTFOLIO",
          
           to:process.env.MYMAIL,
           text
          
       })

    //    console.log(info)

       return info;

    } catch (error) {
        console.log(error.message);
    }
}

module.exports = mailSender;


