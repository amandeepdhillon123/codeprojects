

const Todo = require("../models/Todo")

exports.deleteTodo = async(req,resp)=>{
    try {
        const {id}= req.params;

        await Todo.findByIdAndDelete(id);

        resp.status(200).json({
            success:true,
            message:"Todo Deleted"
        })
        
    } catch (error) {

        console.log("succeeful deleted");
        resp.status(500).json({
            success:false,
            error:err.message,
            message:"server srror"
        })
        
    }
}