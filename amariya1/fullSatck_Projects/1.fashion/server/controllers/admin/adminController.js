// require("dotenv").config();
// const cloudinary = require("../../Cloudinary/cloudinary")
// const adminDB = require("../../models/admin/adminModel")
// const bcrypt = require("bcrypt")

// //register

// exports.Register = async (req, resp) => {
//     try {
//       const { name, email, password, confirmpassword, mobile } = req.body;
  
//       if (
//         !name ||
//         !email ||
//         !password ||
//         !confirmpassword ||
//         !mobile ||
//         !req.file
//       ) {
//         resp.status(400).json({
//           success: false,
//           messsage: "all fields are required",
//           error: error.message,
//         });
//       }
  
//       const file = req.file?.path;
  
//       // cloudinary setup
//       async function uploadCcloudainry(file, folder) {
//         options = { folder };
  
//         return await cloudinary.uploader.upload(file, options);
//       }
//       const response = await uploadCcloudainry(file, "fashion");
  
//       const preuser = await adminDB.findOne({ email: email });
//       const mobileverification = await adminDB.findOne({ mobile: mobile });
  
//       if (preuser) {
//         resp.status(400).json({ error: "This Admin is Already Exist" });
//       } else if (mobileverification) {
//         resp.status(400).json({ error: "This Mobile is Already Exist" });
//       } else if (password !== confirmpassword) {
//         resp
//           .status(400)
//           .json({ error: "password and confirm password not match" });
//       } else {
//         // const hashPassword =await  bcrypt.hash(password,10)
  
//         const adminData = new adminDB({
//           name,
//           email,
//           mobile,
//           // password: hashPassword,
//           password,
//           profile: response.secure_url,
//         });
  
//         console.log("admindata", adminData);
  
//         await adminData.save();
//         resp.status(200).json(adminData);
//       }
  
//       resp.status(200).json({
//         success: true,
  
//         message: "registered successfully",
//       });
//     } catch (error) {
//       resp.status(400).json({
//         success: false,
//         error: error.message,
//       });
//     }
//   };

// // register
