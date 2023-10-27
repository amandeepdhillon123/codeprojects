

const express = require("express");

const router = express.Router();

const {createTodo} = require("../controller/createTodo.js")

const { getTodo,getSingle} = require("../controller/getTodo.js")
const {update} = require("../controller/update.js")
const {del} = require("../controller/del.js")
router.post("/create", createTodo)
router.get("/getTodo", getTodo)
router.get("/getTodo/:id", getSingle)
router.put("/update/:id", update)
router.delete("/del/:id",del)

module.exports = router