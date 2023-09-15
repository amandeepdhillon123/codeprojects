
const bcrypt = require("bcrypt");

const User =require("../models/Authenticate");

exports.signUp =async(req,resp)=>{
    try {

        const {name,email,password,role} = req.body;

        const existingUser =await User.findOne({email});

        if(existingUser){
             
        }

        let hashedPassword;
        try {
            hashedPassword= await bcrypt.hash(password,10);

            
        } catch (error) {
             return resp.status(500).json({
                success:false,
                message:"Error in hashing Password"
             })
        }

        const user= await User.create({
            name,email,password:hashedPassword,role
        })

        return resp.status(200).json({
            success:true,
            message:"User created successfully"
        })
        
    } catch (error) {
        return resp.status(500).json({
            success:false,
            message:"Iser cannot be  registered, plz try agaisn later"
         })
        
    }
}


