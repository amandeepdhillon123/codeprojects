const User = require("../models/User")
 const jwt = require("jsonwebtoken")

 require("dotenv").config();

//  login
exports.login =async(req,resp)=>{
    try {
        const {email,password} = req.body;
        
        const user = await User.findOne({email,password})
        
        if(!user){
            return resp.status(400).json({
                success: false,
                message: "Invalid email or password",
              });
        }
      
//    create token 
      const payload ={
        _id:user._id
      }
    const token = jwt.sign(payload,process.env.JWT_SECRET)

    user.token = token

    console.log(token)
     
    const options ={
        expires: new Date(Date.now() + 3*24*60*60
        *1000),
        httpOnly: true,
    }
    resp.cookie("token", token, options).status(200).json({
        success:true,
        token,
        user,
        message:'User Logged in successfully',
    });

   
  

} catch (error) {
        return resp.status(400).json({
            success:true,
            message:error.message
        })
    }
}

// logout 

exports.logout = async (req, res) => {
    try {

        const option = {
            expires: new Date(Date.now()),
            httpOnly: true,
        }
      res.status(200).cookie("token", null,option)
       .json({
          success: true,
          message: "Logged Out Successfully",
        });

    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

//   get user 

exports.getUser = async (req, res) => {
    try {
      const user = await User.findOne().select("-password -email");
  
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };


//   myprofile

exports.myProfile = async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
  
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };