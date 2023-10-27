

const express = require("express");

const router = express.Router();

const { post}  = require("../controller/post")
const {comment} = require("../controller/comment")
const {like,unlike} = require("../controller/like")


router.post("/createPost",post);
router.post("/createComment",comment)
router.post("/createLike",like)
router.post("/unlike",unlike)


module.exports = router;