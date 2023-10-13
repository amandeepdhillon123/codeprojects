const User = require("../models/Todo")

exports.createTodo = async(req,resp)=>{
   try {
    //    data fetch from body 
    const{title, description} = req.body;

    // create entry into db 

    const response = await User.create({title,description})

    resp.status(200).json({
        success:true,
        data:response,
        message:"Entry successful"
    })

} catch (error) {
        console.log(error);
        resp.status(500).json({
            success:false,
            data:"Inernal server error",
            message:error.message
        })
   }

}