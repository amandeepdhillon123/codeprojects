
const User = require("../models/todo");

exports.createTodo =async(req,resp)=>{
  
    try {
        const {title,description} = req.body;

        const response = await User.create({title,description})


         resp.status(200).json({
            success:true,
            data:response,
            message:"Entry successful"
         })
     
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            success:false,
            message:"Internal server error",
            error:error.message
        })
        
    }

     
}