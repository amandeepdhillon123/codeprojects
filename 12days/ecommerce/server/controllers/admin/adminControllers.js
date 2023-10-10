
const adminDB = require("../../model/admin/adminModel");
const cloudinary= require("../../cloudinary/cloudinary")

exports.Register=async(req,resp)=>{
    try {
        // console.log(req.body)
        // console.log(req.file)
           
        //fetch data from body
        const{name, email, mobile, password, confirmpassword} = req.body;

        // validation
         
        const
    } catch (error) {
        
    }
}

    