const mongoose = require("mongoose");

const Todo = require("../models/Todo");

exports.createTodo = async (req, resp) => {

  console.log(req.body)
  const { name, email, age, mobile, work, add, desc } = req.body;

// check data is fill or not 

  if (!name || !email || !age || !mobile || !work || !add || !desc) {
    return  resp.status(422).json({
      message: "please fill data",
      success: false,
    });
  }
  try {

   // check user is already exist or not 
    const preuser = await Todo.findOne({ email: email });
    console.log(preuser);

    if (preuser) {
   resp.status(422).json({
        message: "user is already exist",
        success: false,
      });

      // otherwise data ise ineserted 
    } else {
      const response = await Todo.create({
        name, email, age, mobile, work, add, desc
      });

   resp.status(200).json({
        success: true,
        data: response,
        messsage: "entry successful",
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
