const Comment= require("../models/commentModel")
const Post = require("../models/postModel")

exports.commentModel =async(req,resp)=>{
    try {
        const{post ,user ,body} =req.body;

        const comment  =new Comment({
            post ,user ,body
        })

        const saved = await comment.save();
      

         const updatePost = await Post.findByIdAndUpdate(post, {$push:{comments:saved._id}},{new:true})
         .populate("comments")
         .exec()

         resp.status(200).json({
            post:updatePost
         })
    
    } catch (error) {
        return resp.status(500).json({
            message:"error while creating comment",
            error:error.message
            
        })
    }
}

// delcomeent

exports.delCommnet = async(req,resp)=>{
    try {
         const{post ,comment} = req.body;

         const del = await Comment.findOneAndDelete({post, _id:comment});

       const updated = await Post.findByIdAndUpdate(post,{$pull:{comments: del._id}},{new:true})

       resp.status(200).json({
        post:updated
       })
    } catch (error) {
        
        resp.status(500).json({
            error:error.message
        })
    }
}
