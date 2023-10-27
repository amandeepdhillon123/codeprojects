
const User = require("../models/todo")

exports.getTodo =async(req,resp)=>{
    try {
     
        const response = await User.find({});

        resp.status(200).json({
            success:true,
            data:response,
            message:"get data successful"
        })
        
    } catch (error) {
        
        resp.status(500).json({
            success:false,
            message:"internal server error",
            error:error.message
        })
    }
}


exports.getSingle =async(req,resp)=>{
    try {
        const{id} = req.params;

        const todo = await User.findById({_id:id})

        resp.status(200).json({
            success:true,
            data:response,
            message:"get data successful"
        })
    } catch (error) {
        resp.status(500).json({
            success:false,
            message:"internal server error",
            error:error.message
        })
    }
}