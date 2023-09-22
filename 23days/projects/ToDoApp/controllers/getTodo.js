const Todo = require("../models/Todo");

exports.getTodo = async (req, resp) => {
  try {
    const todos = await Todo.find({});

    resp.status(200).json({
      success: true,
      data: todos,
      message: "All data fetched",
    });
  } catch (error) {
    console.error(error);
    resp.status(500).json({
      success: true,
      error: error.message,
      message: "server error",
    });
  }
};

exports.getTodoById = async (req, resp) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    if (!todo) {
      return resp.status(404).json({
        success: false,
        message: "no data fpund with given id",
      });
    }

    resp.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} data succeefully fetched`,
    });
  } catch (err) {
    console.error(err);
    resp.status(500).json({
      success: true,
      error: err.message,
      message: "Server Error",
    });
  }
};
