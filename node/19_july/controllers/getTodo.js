




const Todo = require("../models/Todo");

exports.getTodo = async (req, resp) => {
  try {
    // const { id } = req.params;

    const response = await Todo.find({});


    resp.status(200).json({
      data: response,
      success: true,
      message: "find successfull",
    });
  } catch (error) {

    console.log(error)
    resp.status(500).json({
      success: false,
      message: "inertnal server error",
      error: error.message,
    });
  }
};



exports.getTodoByid = async (req, resp) => {
    try {
      const { id } = req.params;
  
      const response = await Todo.findById({_id:id});
  
    
  
      resp.status(200).json({
        data: response,
        success: true,
        message: "find successfull",
      });
    } catch (error) {
  
      console.log(error)
      resp.status(500).json({
        success: false,
        message: "inertnal server error",
        error: error.message,
      });
    }
  };
  