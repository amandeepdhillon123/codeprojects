


// const Todo = require("../models/Todo")


// exports.getTodo = async(req,resp)=>
// {
//     try {
//          const todos = await Todo.find({}) 

//          resp.status(200).json({
//             success:true,
//             data:todos,
//             message:"Entire dasta is fetched"
//          })

//     } 
    
//     catch (err) {
//         console.log(err)
//         resp.status(500).json({
//             success:false,
//             error:err.message,
//             message:"Server error"
//         })
        
//     }
// }

// exports.getTodoById = async(req,resp)=>{

//    try {
//     const id= req.params.id;

//     const todos = await Todo.findById({_id:id})

//     if(!todos)
//     {
//         return resp.status(404).json({
//             success:false,
//             message:"no data find of this given id"
//         })
//     }
//     else
//     {
//         return resp.status(200).json({
//             success:true,
//             data:todos,
//             message:`${id} fetched data sucessful`
//         })
//     }
    
//    } catch (error) {
//        console.log(error);
//        resp.status(500).json({
//         success:false,
//         error:error.message,
//         message:"koni mila bhai",

//        })
//    }
// }

const Todo = require("../models/Todo")

exports.getTodo =async(req,resp)=>{
    try {

        const response = await Todo.find({})

        resp.status(200).json({
            success:true,
            data:response,
            message:"get todo successful"

        })
        
    } catch (error) {
        resp.status(500).json({
            success:false,
            error:error.message,
            message:"inernal server error",
        })
    }
}




exports.getTodoByid = async(req,resp)=>{
    try {
          const {id} = req.params;

          const response = await Todo.findById({_id:id})

          resp.status(200).json({
            success:true,
            data:response,
            message:"successful",

          })
    } catch (error) {
        
        resp.status(500).json({
            success:false,
            message:"inernal server error",
            error:error.message,
        })
    }
}