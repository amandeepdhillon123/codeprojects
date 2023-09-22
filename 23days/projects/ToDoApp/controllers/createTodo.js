

const Todo = require("../models/Todo");

exports.createTodo = async(req,resp)=>{
    try {
          
        const {title,description} = req.body;

        const response = await Todo.create({title,description})
        
        resp.status(200).json({
            success:true,
            data:response,
            message:"Entry succesfule"
        })
        
    } catch (error) {
        console.log(error);
        console.log(error);
        resp.status(500).json({
             success:false,
             data:"internal server srror",
             message:err.message,
        })
        
    }
}