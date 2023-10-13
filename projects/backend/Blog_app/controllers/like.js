
const Like= require("../models/likeModel");
const Post= require("../models/postModel")

exports.like =async(req,resp)=>{
  try {
  
    const {post, user} = req.body;

    const lik = await Like.create({post, user})

    const updateLike = await Post.findByIdAndUpdate(post,{$push:{likes:lik._id}},{new:true})
    .populate("likes")
    .exec()

    resp.status(200).json({
        post:updateLike
    })
    
  } catch (error) {
     return resp.status(500).json({
         error:error.message
     })
  }
}

//  unlike post 


exports.unlike = async(req,resp) =>{
    try {
        
        const {post, like} = req.body;

        const deletedLike = await Like.findOneAndDelete({post, _id:like})

      const updated = await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true})

      resp.json({
        post:updated
      })
    } catch (error) {
        resp.status(200).json({
            error:error.message
        })
    }
}