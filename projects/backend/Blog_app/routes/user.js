const express = require("express")

const router = express.Router();

const {createPost , getAllPosts} = require("../controllers/post")
const {commentModel, delCommnet} = require("../controllers/comment")
const{ like,unlike}  = require("../controllers/like")


router.post("/createPost",createPost)
router.post("/creatComment",commentModel)
router.post("/creatLike",like)
router.post("/unlike",unlike)
router.post("/delComment",delCommnet)
router.get("/ram",getAllPosts)


module.exports = router