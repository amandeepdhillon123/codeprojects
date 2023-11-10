const adminDB = require("../../model/admin/adminModel");
const clodinary = require("../../Cloudinary/cloudinary");
const bcrypt = require("bcrypt");

// register
exports.Register =async(req,res)=>{
   try {
    //  fetch data from req body
    const{name,email,password,confirmpassword,mobile} = req.body;

    // Check if all necessary fields are provided
    if(!name || !email || !password || !confirmpassword || !mobile || !req.file){
        req.status(400).josn({
            success:false,
            message:"all fields are required"
        })
    }

    // image file fetect
    const file=req.file?.path;

    // upload to clodinary
    async function uploadToCloudinary(file,folder){
        const options ={folder}
      return await clodinary.uploader.upload(file, options)
    }
    
    const upload =  await uploadToCloudinary(file,"fashion")


    // check user and mobile exist or not , password and confirm match or not
    const preuser = await adminDB.findOne({email:email});
    const mobileverification = await adminDB.findOne({mobile:mobile})
    if(preuser){
        req.status(400).josn({
            success:false,
            message:"User is already exist"
        })
    }
    else if(mobileverification){
        req.status(400).josn({
            success:false,
            message:"mobile is already exist"
        })
    }
    else if(password !== confirmpassword){
        req.status(400).josn({
            success:false,
            message:"password and confirm password not match"
        })
    }
    else{
    // hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // entry into database
    const adminData = new adminDB({
        name,
        email,
        password:hashPassword,
        profile:upload.secure_url,
        mobile
    })
  console.log(adminData)
    await adminData.save();
    res.status(200).json({
        message:"registeration successful",
        adminData
    })
    
    }
      // send successful response

      

    
   } catch (error) {
       // Handle any errors that may occur during the process
       return res.status(500).json({
         success: false,
         message: "Internal server error",
         error: error.message,
       })
   }
}