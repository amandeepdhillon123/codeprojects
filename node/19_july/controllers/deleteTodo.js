// //import th model
// const Todo = require("../models/Todo");

// //define route handler

// exports.deleteTodo = async(req,res) => {
//     try {
//         const {id} = req.params;

//         await Todo.findByIdAndDelete(id);

//         res.json({
//             success:true,
//             message:"Todo DELETED",
//         })
       
//     }
//     catch(err) {
//         console.error(err);
//         res.status(500)
//         .json({
//             success:false,
//             error:err.message,
//             message:'Server Error',
//         });
//     }
// }


const Todo = require("../models/Todo")

exports.del = async(req,resp)=>{
  try {

    const{id}= req.params;

     await  Todo.findByIdAndDelete(id)

             resp.json({
            success:true,
            message:"Todo DELETED",
        })
    
  } catch (error) {

            console.error(err);
        resp.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    
  }
}