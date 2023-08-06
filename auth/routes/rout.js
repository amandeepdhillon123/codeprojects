

const express = require("express");

const router = express.Router();

const {createSign}= require("../controller/auth");


router.post('/sign',createSign)

module.exports = router