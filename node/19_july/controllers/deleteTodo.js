


const Todo = require("../models/Todo");

exports.del = async(req,resp) =>{
   try {

    const {id} = req.params;

    const del = await Todo.findOneAndDelete({_id:id})

    resp.status(200).json({
      success:true,
      message:"  successful deleted "

    })
    
   } catch (error) {
      console.log(error);

      resp.status(500).json({
        success:false,
        message:"inernal server error",
        error:error.message
      })
   }
}