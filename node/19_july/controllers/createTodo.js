// const Todo= require("../models/Todo")

// exports.createTodo= async(req,resp)=>{
//      try {
//         const{title,description} = req.body

//         const response = await Todo.create({title,description})

//      resp.status(200).json({
//         success:true,
//         data:response,
//         message:"entry succesful"
//      })

//      } catch (error) {
//         console.log("error aaggya create toodo mein");
//         resp.status(500).json({
//             success:false,
//             message:"internal server error",
//             error:error.message,
//         })

//      }
// }

const Todo = require("../models/Todo");

exports.createTodo = async (req, resp) => {
  console.log(req.body);
  try {
    const { titl, descriptio } = req.body;

    const response = await Todo.create({
      title: titl,
      description: descriptio,
    });

    // console.log(response)

    resp.status(200).json({
      data: response,
      success: true,
      message: "entry successful",
    });
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      message: "ineternal server error",
      success: false,
      error: error.message,
    });
  }
};
