const Todo = require("../models/Todo")

exports.creatTodo = async(req,resp)=>{
   
    try{
        const {title,description} = req.body;

        const response = await Todo.create({title,description})
        

        resp.status(200).json({
             success:true,
             data:response,
             message:"Entry successful"
        })
    } 
    catch (error) {
        console.error(error.message);
        resp.status(500).json({
             success:false,
             data:response,
             message:error.message,
        })
    }
}

