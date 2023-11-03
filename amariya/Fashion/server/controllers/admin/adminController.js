const adminDB= require("../../model/admin/adminModel")
const cloudinary= require("cloudinary").v2;



exports.Register = async(req,resp)=>{
    
      try {
        const {name,email, mobile,password, confirmpassword} = req.body;

        if(!name || !email || !mobile || !password || !confirmpassword || !req.file)
        {
            resp.status(400).json({error:"All fields are required"})
        }

        async function uploadFileToCloudinary(file, folder) {
            const options = {folder};
      
        
          
            return await cloudinary.uploader.upload(file, options);
        }
        const file =req.file?.path;

        const response = await uploadFileToCloudinary(file, "fashion");

       console.log("ram ",response)
         
      
    
    
    } catch (error) {
         resp.status(400).json({
             success:false,
             error:error.message
         })
      }
    
}
