const express = require("express");
const router = express.Router();


//Import Controller
const {likePost,unLikePost } = require("../controllers/likeController");
const {createComment} = require("../controllers/commentController");
const {createPost,getAllPosts} = require("../controllers/postController");



//Mapping Create

router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/getall", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unLikePost);

//export
module.exports = router;
