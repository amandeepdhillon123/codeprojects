
const like= require("../model/like");

const Post = require("../model/post");

exports.like = async(req,resp)=>{
  try {
       
     const {post,user } = req.body;

     const response = new like ({post, user});

     const savedlike = await response.save();

     const updatePost = await Post.findByIdAndUpdate(post,{$push:{likes:savedlike._id}},{new:true})
     .populate("likes").exec();

     resp.status(200).json({
        success:true,
        data:updatePost
     })

  } catch (error) {
      console.log("error during creating element");

      resp.status(500).json({
        error:error.message,
      })
  }
}

// unlike post 

exports.unlike =async(req,resp) =>{
    try {
        const {post,Like } = req.body;

        const deleteLike =await like.findOneAndDelete({post:post,_id:Like})


        // const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deleteLike._id}}, {new:true})

        resp.json(
            {
                // post:updatedPost,
                sucees:true
            }
        )
        
    } catch (error) {

        return resp.status(400).json({
            message:"Error while Unliking post",
            error:error.message,
        })
        
    }
}