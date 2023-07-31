

// const Todo = require("../models/Todo");

// exports.update = async(req,resp)=>{
//      try {
//          const{id} = req.params;
//          const{title,description} =req.body;

//          const update = await Todo.findByIdAndUpdate({_id:id},{title,description,updatedAt:Date.now()})

//          resp.status(200).json({
//             success:true,
//             data:update,
//             message:"server success"

//          })
//      } catch (error) {
//           resp.status(500).json({
//             success:false,
//             error:error.message,
//             message:"inertnal sever error",
//           })
//      }
// }