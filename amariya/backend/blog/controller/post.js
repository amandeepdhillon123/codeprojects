

const Post = require("../model/post")
 exports.post = async(req,resp)=>{
      try {
        const {title, body} = req.body;

        // console.log(req.body)

        const response = new Post({title, body});

        const savedPost = await response.save();

        resp.status(200).json({
            data:savedPost,
            message:"post created successfully"
        })
        
      } catch (error) {
         resp.status(500).json({
            message:"post creating error",
            error:error.message,

         })
      }
 }