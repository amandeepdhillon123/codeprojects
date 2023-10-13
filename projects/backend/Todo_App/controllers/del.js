
const User= require("../models/Todo")


exports.delTodo = async(req,resp)=>{
    try {
          const {id}= req.params;
      

          const todo = await User.findByIdAndDelete({_id:id})

          resp.status(200).json({
            data:todo,
            success:true,
            message:"deleted successfully"
          })
    } catch (error) {
        console.log(error);

        resp.status(500).json({
            success:false,
            error:error.message,
            message:"error in deletion"
        })
    }
}