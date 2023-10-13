const User= require("../models/Todo")


exports.updateTodo = async(req,resp)=>{
    try {
          const {id}= req.params;
          const{title,description}= req.body;

          const todo = await User.findByIdAndUpdate({_id:id},{title, description, updatedAt:Date.now()})

          resp.status(200).json({
            data:todo,
            success:true,
            message:"Updated successfully"
          })
    } catch (error) {
        console.log(error);

        resp.status(500).json({
            success:false,
            error:error.message,
            message:"error in updated"
        })
    }
}