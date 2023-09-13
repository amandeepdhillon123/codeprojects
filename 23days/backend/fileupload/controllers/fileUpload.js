
const user = require("../models/File")

exports.localFileUpload =  async(req,res)=>{
    try {
         const file = req.files.file;
         console.log("file aa gyi",file)

         let path =__dirname + "/files/" + Date.now() +`.${file.name.split(".")[1]}`

         console.log(" paht",path)

         file.mv(path,(err)=>{
            console.log(err)
         })
         res.json({
            success:true,
            message:"local file uploaded succesfully"
         })
        
    } catch (error) {
        console.log("not able to upload the file on server")
        console.log(error)
    }
}
