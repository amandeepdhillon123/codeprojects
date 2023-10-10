
const multer = require("multer");

// storage config 

const storage =multer.diskStorage({
    destination:(req,file,callback) =>{
        callback(null,"./adminuploads")
    },
    filename:(req,file,callback) =>{
        const filename =`image-${Date.now()}.${file.originalname}`
        callback(null,filename)
    }
})

// filter

const filter =(req,file,callback)=>{
    if(file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg"){
        callback(null,true)
    }else{
        callback(null,true)
        return callback(new Error("Only png,jpg,jpeg formatted allow"))
    }
}

const upload = multer({
      storage:storage,
      fileFilter:filter
})

module.exports =upload