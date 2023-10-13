
 const User = require("../models/postModel")

//  exports.createPost = async(req,resp)=>{
//    try {
//     //   fetch data 
//       const {title, body} = req.body

//       const post = new User({
//          title, body
//       })

//       const savedPost = await post.save();

//       resp.status(200).json({
//         success:true,
//         savedPost
//       })
//    } catch (error) {
   
//      resp.status(500).json({
//          success:false,
//          message:"Error in creating post",
//          error:error.message
//      })
//    }
//  }

 exports.getAllPosts = async (req,res) => {
    try {
        const posts = await User.find();
        console.log("skks")
        res.json({
            posts,
        })
    }
    catch(error) {
        return res.status(400).json({
            error: "Error while fetching post",
        });
    }
}