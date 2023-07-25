

// const Todo = require("../models/Todo")

// exports.getTodo =async(req,resp)=>{
//     try {

//         const response = await Todo.find({})

//         resp.status(200).json({
//             success:true,
//             data:response,
//             message:"get todo successful"

//         })
        
//     } catch (error) {
//         resp.status(500).json({
//             success:false,
//             error:error.message,
//             message:"inernal server error",
//         })
//     }
// }




// exports.getTodoByid = async(req,resp)=>{
//     try {
//           const {id} = req.params;

//           const response = await Todo.findById({_id:id})

//           resp.status(200).json({
//             success:true,
//             data:response,
//             message:"successful",

//           })
//     } catch (error) {
        
//         resp.status(500).json({
//             success:false,
//             message:"inernal server error",
//             error:error.message,
//         })
//     }
// }


const Todo = require("../models/Todo.js")

exports.getTodo = async(req,resp)=>{
    try {
        const response = await Todo.find({})
        resp.status(200).json({
            success:true,
            message:"successful",
            data:response,
        })
    } catch (error) {
        console.log(error)
        resp.status(500).json({
            success:false,
            message:"Inernal server error",
            error:error.message
        })
    }
}