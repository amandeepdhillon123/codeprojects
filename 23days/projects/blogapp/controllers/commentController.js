
 const Post =require("../models/postModel");
 const Comment = require("../models/commentModel");

 exports.createComment= async (req,resp)=>{
      try {
         const{ post, user, body} = req.body;

         const comment = new Comment({
            post,user,body
         })

         const savedComment =await comment.save();

         const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
         .populate("comments")
         .exec()

         resp.status(200).json({
            post:updatedPost
         })
        
      } catch (error) {

        return resp.status(500).json({
            success:false,
            error:"Error While creating comment",
            message:error.message
        })
        
      }
 }