
const express = require("express");
const router = express.Router();

const {createTodo} = require("../controllers/createTodo")
const {getTodo,getTodoById} = require("../controllers/getTodo")
const {updateTodo} = require("../controllers/update")
const {delTodo}  = require("../controllers/del")




router.post("/createTodo",createTodo)
router.get("/getTodo",getTodo)
router.get("/getTodo/:id",getTodoById)
router.put("/updateTodo/:id",updateTodo)
router.delete("/deleteTodo/:id",delTodo)

module.exports= router