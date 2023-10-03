
const express = require("express");
const router = express.Router();

// controler 

const {createTodo} = require("../controller/createTodo")
const {getTodo,getTodoById} = require("../controller/getTodo")
const {update}  = require("../controller/updateTodo")
const {deleteTodo} = require("../controller/deleteTodo")

//  routes

router.post('/register' ,createTodo)
router.get("/getdata",getTodo)
router.get("/getuser/:id",getTodoById)
router.put("/updateuser/:id",update)
router.delete("/deleteuser/:id",deleteTodo)

module.exports  = router