
const Todo = require("../models/Todo");


exports.updateTodo = async(req,resp) =>{
    try {
         
        const {id} = req.params;
        const {title , description } = req.body;

        const todo =await Todo.findByIdAndUpdate(
            {_id:id},
            { title , description , updatedAt: Date.now()})

            resp.status(200).json({
                success:true,
                date:todo,
                message:"Updated Successfully"
            })
        
    } catch (error) {

        console.error(err);
        resp.status(500).json({
            success:true,
            error:err.message,
            message:"server error"
        })
        
    }
}
