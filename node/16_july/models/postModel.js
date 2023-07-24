// //import mongoose
// const mongoose = require("mongoose");


// //route handler
// const postSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     body: {
//         type: String,
//         required: true,
//     },
//     likes: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Like",
//     }],
//     comments: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Comment",
//     }]
// });




// //export
// module.exports = mongoose.model("Post", postSchema);

const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
        title:{
            type:String,
            required:true,
        },
        body:{
            type:String,
            required:true
        },
        Comments:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        },
        Likes:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Like"
        }

})

module.exports = mongoose.model("Post",PostSchema)