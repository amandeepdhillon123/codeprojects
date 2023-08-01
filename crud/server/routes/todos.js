

const express = require("express");

const router= express.Router();

// controller

const{createTodo}=require("../controllers/createTodo")
const{getTodo,getTodoByid}= require("../controllers/getTodo")
const{update} = require("../controllers/updateTodo")
const{deleteTodo}=require("../controllers/deleteTodo")



// mapping controller

router.post('/register', createTodo)
router.get("/getdata",getTodo)
router.get("/getuser/:id",getTodoByid)
router.put("/updateuser/:id",update)
router.delete("/deleteuser/:id",deleteTodo)

module.exports = router;

