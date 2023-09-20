
const express= require("express");

const app= express();

require("dotenv").config();

const PORT = process.env.PORT ;

app.use(express.json());

const fileupload = require("express-fileupload")

app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))

const dataBase= require("./config/database")
dataBase.dbConnect();

const cloudinary= require("./config/cloudinary")
cloudinary.cloudinaryConnect()

const Upload= require("./routes/FileUpload")

app.use('/api/v1/upload',Upload)

app.listen(PORT,()=>{
    console.log(`app is running at ${PORT}`)
})