// //import th model
// const Todo = require("../models/Todo");

// //define route handler

// exports.getTodo = async(req,res) => {
//     try {
//             //fetch all todo items from database
//             const todos = await Todo.find({});

//             //response
//             res.status(200)
//             .json({
//                 success:true,
//                 data:todos,
//                 message:"Entire Todo Data is fetched",
//             });
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


// exports.getTodoById = async(req, res) => {
//     try {
//        //extract todo items basis on id
//        const id = req.params.id;
//        const todo = await Todo.findById( {_id: id})

//        //data forgiven id not found
//        if(!todo) {
//         return res.status(404).json({
//             success:false,
//             message:"No Data Found woth Given Id",
//         })
//        }
//        //data for given id FOUND
//        res.status(200).json({
//         success:true,
//         data:todo,
//         message: `Todo ${id} data successfully fetched`,
//        })

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


exports.getTodo = async(req,resp)=>
{
    try {
         const todos = await Todo.find({}) 

         resp.status(200).json({
            success:true,
            data:todos,
            message:"Entire dasta is fetched"
         })

    } 
    
    catch (err) {
        console.log(err)
        resp.status(500).json({
            success:false,
            error:err.message,
            message:"Server error"
        })
        
    }
}

exports.getTodoById = async(req,resp)=>{

   try {
    const id= req.params.id;

    const todos = await Todo.findById({_id:id})

    if(!todos)
    {
        return resp.status(404).json({
            success:false,
            message:"no data find of this given id"
        })
    }
    else
    {
        return resp.status(200).json({
            success:true,
            data:todos,
            message:`${id} fetched data sucessful`
        })
    }
    
   } catch (error) {
       console.log(error);
       resp.status(500).json({
        success:false,
        error:error.message,
        message:"koni mila bhai",

       })
   }
}