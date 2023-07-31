

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

const Todo = require("../models/Todo")

exports.updateTodo = async(req,resp)=>{
     try {

          const{id}=req.params;
          const{titl,descriptio}= req.body;

          const response = await Todo.findByIdAndUpdate({_id:id},{title:titl,description:descriptio,updatedAt:Date.now()})

          console.log(response)

          resp.status(200).json({
               data:response,
               succes:true,
               message:"entry succesful"
          })
          
     } catch (error) {
          resp.status(500).json({
               message:"internal sever error",
               error: error.message,
               success:false
          })
     }
}