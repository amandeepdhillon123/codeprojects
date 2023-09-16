

const User =require("../models/User");
const mailSender= require('../utils/mailSender')
const bcrypt= require("bcrypt")

//  reset Password Token
exports.resetPasswordToken= async(req,resp)=>{
    try {
        // get email form req body;
        const {email}= req.body.email;

        // check user for this email, email validation

        const user =await User.findOne({email:email})
        if(!user){
            return resp.json({
                success:false,
                message:"Toue email is not registered wit us"
            })
        }

// generate token
        const token = crypto.randomUUID();
        
//  update user by adding token and expiration time
        const updateddetails= await User.findByIdAndUpdate(
                              {email:email},
                              {
                                token:token,
                                resetPasswordExpires:Date.now()+ 5*60*1000
                              },{new:true});
//  create url

        const url=`http://localhost:3000/update-passwrod${token}`

//  send mail containing the url
        await mailSender(email,"Password reset link",`Password reset Link: ${url}`)

 // return response
        
      return resp.json({
        success:true,
        message:"Email sent successfully, please check meail and change pwd"
      })


       

    } catch (error) {
         console.log(error)
         return resp.status(500).json({
            succes:false,
            message:"something went wrong while reset password mails"
         })
    }


}


// resetPassword
       exports.resetpassword= async(req,resp)=>{
     try {
// data fetch 
        const{password,confirmPassword,token} = req.body;

// validation
        if(password !== confirmPassword)
        {
            return resp.json({
                success:false,
                message:"Password did not match"
            })
        }
// get user details from db using token
       const userDetails = await user.findOne({token:token})
// if not entry -invlid token
       if(!userDetails){
        return resp.json({
            success:false,
            message:"Token is invalid"
        })
       }
// token time check
    if(userDetails.resetPasswordExpires < Date.now()){
        return resp.json({
            success:false,
            message:"Token is  expired, please regenerate your token"
        })
    }
// hash password 
    const hashedPassword= await bcrypt.hash(password,10)

// password update
        await User.findByIdAndUpdate(
            {token:token},
            {password:hashedPassword},
            {new:true}
        )
//    return response

        return resp.status(200).json({
            success:true,
            message:"password reset successful"
        })
            
        
     } catch (error) {
        console.log(error)
        return resp.status(500).json({
            success:false,
            message:"somethinf went wrong while sneding reset pwd mail"
        })
        
     }
}