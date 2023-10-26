
const User = require("../models/todo")

exports.getTodo =async(req,resp)=>{
    try {
     
        const response = await User.find({});

        resp.status(200).json({
            success:true,
            data:response,
            required:true
        })
        
    } catch (error) {
        
        resp.status(200).json({
            success:true,
            data:response,
            required:true
        })
    }
}