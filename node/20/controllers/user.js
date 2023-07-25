
const User = require("../models/User")
const bcrypt = require("bcrypt")
exports.users =async(req,resp)=>{
    try {
        const{name,password,email,role}=req.body

        const existingUser = await User.findOne({email})

        if(existingUser)
        {
            return resp.status(400).json({
                success:false,
                message:"alredy exiting user"
            })
        }

        let hashedPassword;

        try {

            hashedPassword = await bcrypt.hash(password,10)

         
            
        } catch (error) {
            return resp.status(400).json({
                success:false,
                message:"password worng"
            })
            
        } 

        const user = await User.create({name,email,password:hashedPassword,role})


        return resp.status(200).json({
            success:true,
            message:"user created"
        })





} catch (error) {

    console.log(error)
    return resp.status(200).json({
        success:true,
        message:"error in signup"
    })
    
}
    
    
}