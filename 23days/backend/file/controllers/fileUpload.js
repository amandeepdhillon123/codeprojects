
const File = require("../models/File")

exports.localFileUpload = async(req,resp) =>{
    try {

        const file = req.files.file;
        console.log("---",file)

        let path =__dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}` 

        console.log("path",path)

        file.mv(path,(err) =>{
            console.log(err)
        })

        resp.json({
            success:true,
            message:"loacl file upload successfully"
        })

        
    } catch (error) {

        console.log("not able to upload the file on server")
         console.log(error)
    }
}