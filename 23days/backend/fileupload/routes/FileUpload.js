
const express = require("express");

const router= express.Router();

const{localFileUpload,imageupload} =require("../controllers/fileUpload")


router.post('/localFileUpload',localFileUpload)
router.post('/imageUpload',imageupload)

module.exports = router;