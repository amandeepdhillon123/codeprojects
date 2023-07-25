
const express = require("express")

const router =express.Router()

const{users}=require("../controllers/user")
const{login} = require("../controllers/user")

router.post("/sign",users)
router.post("/login",login)

module.exports =router