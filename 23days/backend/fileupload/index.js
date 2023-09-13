
const express= require("express");

const app= express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

const fileUpload = require("express-fileupload")

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))

const db= require("./config/database")

const Upload= require("./routes/FileUpload")

app.use('/api/v1/upload',Upload)

app.listen(PORT,()=>{
    console.log(`app is running at ${PORT}`)
})
