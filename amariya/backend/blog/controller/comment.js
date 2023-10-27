

const Comment = require("../model/comment")
const Post = require("../model/post")
exports.comment =async(req,resp)=>{
    try {
         
        const {post, user, body} = req.body;
       
        const response = new Comment ({post, user, body})

        const saved = await response.save();

        const updatePost = await Post.findByIdAndUpdate(post,{$push:{comments: saved._id}}, {new:true})
        .populate("comments").exec();

        resp.status(200).json({
            success:true,
            data:updatePost
        })


    } catch (error) {
        console.log("error craetinf in comment");

        resp.status(500).json({
            success:false,
            error:error.message
        })
    }
}