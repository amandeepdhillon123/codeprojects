const mongoose = require("mongoose")

const ratingAndReviewSchema = new mongoose.Schema({
   user:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"User"
   },
   rating:{
    tyep:number,
    required:true

   },
   review:{
    required:true,
    type:String

   }

})

module.exports = mongoose.model("RatingAndReview",ratingAndReviewSchema)