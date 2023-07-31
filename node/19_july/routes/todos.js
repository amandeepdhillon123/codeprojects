

// const router= express.Router();

// controller

// const{createTodo}=require("../controllers/createTodo")
// const{getTodo,getTodoByid}= require("../controllers/getTodo")
// const{update} = require("../controllers/updateTodo")
// const{deleteTodo}=require("../controllers/deleteTodo")



// mapping controller

// router.post('/createTodo', createTodo)
// router.get("/getTodo",getTodo)
// router.get("/getTodos/:id",getTodoByid)
// router.put("/update/:id",update)
// router.delete("/delete/:id",deleteTodo)

// module.exports = router;


const express = require("express");

const router = express.Router();


// controller 

const{createTodo}= require("../controllers/createTodo")

const {getTodo,getTodoByid}= require('../controllers/getTodo')


// routes

router.post("/createTodo", createTodo);
router.get("/getTodo",getTodo)
router.get('/getTodoByid/:id',getTodoByid)


module.exports= router;