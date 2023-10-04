const Todo = require("../models/Todo")


exports.update = async(req,resp)=>{
    try {
         const {id} = req.params;

         const update = await Todo.findByIdAndUpdate(id,req.body,{new:true})

        //   retrun response
        resp.status(200).json({
            success:true,
            data:update,
            message:"update successfully"
        })

    } catch (error) {
        console.timeLog(error)
        resp.status(500).json({
            success:false,
            error:error.message,
            message:"internal server error"
        })
    }
}