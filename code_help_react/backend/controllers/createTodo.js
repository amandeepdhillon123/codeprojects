

const Todo = require("../models/Todo")


exports.createTodo = async(req,resp) =>{
    try {
       const{title,description} = req.body
       
       const response = await Todo.create({title,description})

       resp.status(200).json(
        {
            success:true,
            data:response,
            mesaage:"Ebtry create successfully"
        }
       )

    } 
    catch (error) {
        console.error(err);
        console.log(err);
        resp.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.nessage,
        })
        
    }
}