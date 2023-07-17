
const express = require('express');

const router = express.Router();
const {creatTodo} = require('../controllers/createTodo')

router.post("/createTodo", creatTodo)

module.exports = router;