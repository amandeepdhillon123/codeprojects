const Todo = require("../models/Todo");

exports.createTodo = async (req, resp) => {
  try {
    console.log(req.body);

    // fetch data from req body
    const { name, email, age, mobile, work, add, desc } = req.body;

    // check all data fill or not

    if (!name || !email || !age || !mobile || !work || !add || !desc) {
      return resp.status(422).json({
        messsage: "please fill all data",
        success: false,
        error: error.message,
      });
    }

    // check user is already exit or not
    const preuser = await Todo.findOne({ email: email });
    console.log(preuser);

    if (preuser) {
      resp.status(422).json({
        message: "user is already exist",
        success: false,
        error: error.message,
      });
    } else {
      //  data  inserted init database
      const response = await Todo.create({
        name,
        email,
        age,
        mobile,
        work,
        add,
        desc,
      });

      resp.status(200).json({
        success: true,
        data: response,
        message: "entry successful",
      });
    }
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      success: false,
      error: error.message,
      message: "Internal server error",
    });
  }
};
