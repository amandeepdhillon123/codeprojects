

// const Todo= require("../models/Todo");

// exports.updateTodo = async(req,resp)=>{
      
//     try {
//         const {id} = req.params;
//        const{title,description} = req.body;

//        const update =await Todo.findByIdAndUpdate({_id:id},{title,description,updatedAt:Date.now()})

//        resp.status(200).json({
//              success:true,
//               data:update,
//               message:"succeessfull updated"
//        })
        
//     } catch (error) {

//         console.log("gyi bhains paani mein")
//         resp.status(500).json({
//             success:false,
//             error:error.message,
//             message:"nehi hooa koi joogad"
//         })
//     }
// }
