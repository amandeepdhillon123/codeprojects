
const Todo = require('../models/Todo');

exports.createTodo = async(req,resp)=>{
         
    try {
        const{title,description} = req.body;
        const response =await Todo.create({title,description})
        resp.status(200).json(
            {
                success:true,
                data:response,
                message:"entry successful"
            }
        )
    } catch (error) {

        console.error(error);

        resp.status(500).json({
            success:true,
            data:"interanl server eroor",
            message:error.message,
        })

        
    }
}
