const Todo = require("../models/Todo");

exports.getTodo = async (res, resp) => {
  try {
    // get data
    const response = await Todo.find({});

    //  retrun response

    resp.status(200).json({
      success: true,
      data: response,
      message: "get todo successful",
    });
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      success: false,
      error: error.message,
      message: "internal server error",
    });
  }
};

// //  get individual user


exports.getTodoById = async(req,resp) =>{
    try {
        // data fetch from id
        const {id} = req.params;
         
        // find by id
        const response = await Todo.findById({_id:id})
        
        //  retrun response
         resp.status(200).json({
              success:true,
              data:response,
           
              message:"successfully"
         })
    } catch (error) {

        console.log(error)
        resp.status(500).json({
            succes:false,
            message:"Internal server error",
            error:error.message
        })
        
    }
}
