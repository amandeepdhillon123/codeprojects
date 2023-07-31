


const express = require("express");

const router = express.Router();


// controller 

const{createTodo}= require("../controllers/createTodo")

const {getTodo,getTodoByid}= require('../controllers/getTodo')

const{updateTodo}= require("../controllers/updateTodo")

const {del}= require("../controllers/deleteTodo")


// routes

router.post("/createTodo", createTodo);
router.get("/getTodo",getTodo)
router.get('/getTodoByid/:id',getTodoByid)

router.put("/update/:id",updateTodo)
router.delete("/del/:id",del)

module.exports= router;