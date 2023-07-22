

// const Todo = require("../models/Todo")

// exports.del = async(req,resp)=>{
//   try {

//     const{id}= req.params;

//      await  Todo.findByIdAndDelete(id)

//              resp.json({
//             success:true,
//             message:"Todo DELETED",
//         })
    
//   } catch (error) {

//             console.error(err);
//         resp.status(500)
//         .json({
//             success:false,
//             error:err.message,
//             message:'Server Error',
//         });
    
//   }
// }

const Todo = require("../models/Todo");



exports.deleteTodo =async(req,resp)=>{

  try {
      const{id}= req.params;
        const del = await Todo.findOneAndDelete(id)

        resp.status(200).json({
          success:true,
          data:del,
          message:"server swuccesful"

        })
  } catch (error) {

    resp.status(500).json({
      success:true,
      message:"inernal seevre error",
      error:error.message
    })
    
  }
}