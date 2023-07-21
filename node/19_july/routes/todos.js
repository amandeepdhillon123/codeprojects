// const express  = require("express");
// const router = express.Router();

// //import controller
// const {createTodo} = require("../controllers/createTodo");
// const {getTodo, getTodoById} = require("../controllers/getTodo");
// const {updateTodo} = require("../controllers/updateTodo");
// const {deleteTodo} =  require("../controllers/deleteTodo");

// //define APi routes
// router.post("/createTodo", createTodo);
// router.get("/getTodos", getTodo);
// router.get("/getTodos/:id", getTodoById);
// router.put("/updateTodo/:id", updateTodo);
// router.delete("/deleteTodo/:id", deleteTodo);

// module.exports = router;


const express = require('express');

const router= express.Router();

// import controller 

const {createTodo} = require("../controllers/createTodo")
const {getTodo ,getTodoById} = require("../controllers/getTodo")

// api router 

router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
router.get("/getTodos/:id",getTodoById);

module.exports = router;