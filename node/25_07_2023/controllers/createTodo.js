
// const Todo= require("../models/Todo")

// exports.createTodo= async(req,resp)=>{
//      try {
//         const{title,description} = req.body

//         const response = await Todo.create({title,description})

//      resp.status(200).json({
//         success:true,
//         data:response,
//         message:"entry succesful"
//      })

//      } catch (error) {
//         console.log("error aaggya create toodo mein");
//         resp.status(500).json({
//             success:false,
//             message:"internal server error",
//             error:error.message,
//         })
        
//      }
// }