const Post = require("../model/sign")
const bcrypt = require("bcrypt")

exports.createSign = async(req,resp)=>{
    try {
        //    get data
        const{name,email,password,role} = req.body;

        //  already exit 

        const existingUser = await Post.findOne({email})

        if(existingUser)
        {
            return resp.status(400).json({
                success:false,
                message:"user is already exist"
            })
        }

        // secure password 
   let hashedpassword;
        try {

            hashedpassword = await bcrypt.hash(password,10)
            
        } catch (error) {
             resp.status(500).json({
                sucess:false,
                message:"internal server error",
                error:error.message
             })
        }

        const user = await Post.create({name,email,password:hashedpassword,role})

        resp.status(200).json({
            success:true,
            message:"succeesful entry",
            data:user
        })


        
    } catch (error) {

        resp.status(500).json({
            sucess:false,
            message:"internal server error",
            error:error.message
         })
        
    }
}