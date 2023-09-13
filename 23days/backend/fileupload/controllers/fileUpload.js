
const user = require("../models/File")
const cloudinary = require("cloudinary").v2;

exports.localFileUpload =  async(req,res)=>{
    try {
         const file = req.files.file;
         console.log("file aa gyi",file)

         let path =__dirname + "/files/" + Date.now() +`.${file.name.split(".")[1]}`

         console.log(" paht", path)

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

// image upload on cloudinary 

function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder) {
    const options = {folder};
    console.log("temp file path", file.tempFilePath);

    // if(quality) {
    //     options.quality = quality;
    // }

    // options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}
exports.imageupload= async(req,res) =>{
    try {
        const{name,tags,email} = req.body;

        console.log(name,tags,email)

        const file = req.files.imageFile;

        console.log(file)

        const supportedTypes =["jpeg","jpg","png"];

        const fileType = file.name.split('.')[1].toLowerCase()

        console.log("fileType", fileType)

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:"file format not supported"
            })
        }

        console.log("uploading");

        const response= await uploadFileToCloudinary(file,"dhillon")
    console.log(response)

    const fileData = await user.create({
        name,
        tags,
        email,
        imageUrl:response.secure_url
       
    
    });

    console.log(fileData)

    res.json({
        success:true,
        message:"image successfully"
    })
        
    } catch (error) {
        console.error(error);
        res.status(400).json({
            success:false,
            message:"something went wrong"
        })
        
    }
}


// video upload 

