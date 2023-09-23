
const Post =require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost= async (req,resp)=>{
     try {
        const{ post, user} = req.body;
     

        const like = new Like({
           post,user
        })

        const savedLike =await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true})
        .populate("likes")
        .exec()

        resp.json({
           post:updatedPost
        })
       
     } catch (error) {

       return resp.status(500).json({
           success:false,
           error:"Error While creating like",
           error:error.message
       })
       
     }
}

// unlike 

exports.unLikePost =async(req,resp) =>{
    try {
        const {post,like } = req.body;

        const deleteLike =await Like.findOneAndDelete({post:post,_id:like})


        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deleteLike._id}}, {new:true})

        resp.json(
            {
                post:updatedPost
            }
        )
        
    } catch (error) {

        return resp.status(400).json({
            error:"Error while Unliking post"
        })
        
    }
}