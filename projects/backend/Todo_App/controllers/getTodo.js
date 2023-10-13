const User = require("../models/Todo");


exports.getTodo = async(req,resp)=>{
    try {
         const todos= await User.find({});

         resp.status(200).json({
            success:true,
            data:todos,
            message:"All data fetched"
         })
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            succes:false,
            error:error.message,
            message:"server error"
        })
    }
}

exports.getTodoById = async(req,resp)=>{
   try {

    const{id} = req.params;
    const todo = await User.findById({_id:id})

    if(!todo){
        return resp.status(404).json({
            success:false,
            message:"no data found with given id"
        })
    }
    resp.status(200).json({
        success:true,
        data:todo,
        message:`Todo ${id} data successfully fetched`
    })
    
   } catch (error) {
    console.error(error);
    resp.status(500).json({
        success:true,
        error:error.message,
        message:"error"
    })
    
   }
}