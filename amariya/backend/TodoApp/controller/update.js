

const User = require("../models/todo");

const update =async(req,resp)=>{
    try {
        const {id} = req.params;

        const {title, description} = req.body;

        const update = await User.findByIdAndUpdate({_id:id},{title,description,updateAt:Date.now()})

        resp.status(200).json({
            success:true,
            data:update,
            message:"updated successful"
        })
    } catch (error) {
        resp.status(500).json({
            success:false,
            error:error.message,
            message:"updated failed"
        })
        
    }
}