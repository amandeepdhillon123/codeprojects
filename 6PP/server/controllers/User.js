const User = require("../models/User")

exports.login =async(req,resp)=>{
    try {
        const {email,password} = req.body;
        
        const user = await User.findOne({email,password})
        
        if(!user){
            return res.status(400).json({
                success: false,
                message: "Invalid email or password",
              });
        }

        
    } catch (error) {
        return resp.status(400).json({
            success:true,
            message:error.message
        })
    }
}