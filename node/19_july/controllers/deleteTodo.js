


// const Todo = require("../models/Todo");



// exports.deleteTodo =async(req,resp)=>{

//   try {
//       const{id}= req.params;
//         const del = await Todo.findOneAndDelete(id)

//         resp.status(200).json({
//           success:true,
//           data:del,
//           message:"server swuccesful"

//         })
//   } catch (error) {

//     resp.status(500).json({
//       success:true,
//       message:"inernal seevre error",
//       error:error.message
//     })
    
//   }
// }