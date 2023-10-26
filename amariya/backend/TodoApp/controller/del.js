

const User = require("../models/todo");

exports.del = async(req,resp)=>{
    try {
        
        const {id} = req.params;

        const response = await User.deleteOne({_id:id})

        resp.status(200).json({
            success:true,
            message:"delete successfule",
            

        })
    } catch (error) {
        resp.status(500).json({
            success:true,
            message:"delete failed",
            error:error.message
            
        })
    }
}