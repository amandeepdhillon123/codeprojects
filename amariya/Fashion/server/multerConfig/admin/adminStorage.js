
const multer = require("multer");

// storage 
const storage = multer.diskStorage({
     destination:(req,file,callback)=>{
        callback(null,"./adminuploads")
     },
     filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
     }
})


// filter 
const fileFilter =(req,file,callback)=>{
    if(file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" ){
        callback(null,true)
    }
    else{
        callback(null,false)
        return callback( new Error ("only png , jpg and jpeg are allowd"))
    }
}

// upload

const upload = multer({
    storage: storage,
    fileFilter:fileFilter
})


module.exports = upload;
