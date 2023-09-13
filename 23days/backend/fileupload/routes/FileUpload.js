
const express = require("express");

const router= express.Router();

const{localFileUpload,imageupload,videoUpload,imageSizeReducer} =require("../controllers/fileUpload")


router.post('/localFileUpload',localFileUpload)
router.post('/imageUpload',imageupload)
router.post('/videoUpload',videoUpload)
router.post("/imageSizeReducer", imageSizeReducer);

module.exports = router;