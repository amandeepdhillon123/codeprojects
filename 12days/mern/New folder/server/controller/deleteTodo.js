const Todo = require("../models/Todo");

exports.deleteTodo = async (req, resp) => {
  try {
    const { id } = req.params;

    const del = await Todo.findByIdAndDelete({ _id: id });

    //   return response
    resp.status(200).json({
      success: true,
      data: del,
      message: "deleted successfull",
    });
  } catch (error) {
    // console.log(error);
    resp.status(500).json({
      success: true,
      message: "interanl server error",
      error: error.message,
    });
  }
};
