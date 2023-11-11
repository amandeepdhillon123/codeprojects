require("dotenv").config();
const adminDB = require("../../model/admin/adminModel");
const clodinary = require("../../Cloudinary/cloudinary");
const bcrypt = require("bcrypt");

// ---------------->>>>>>> admin register controller <<<------------------------

exports.Register = async (req, res) => {
  try {
    // console.log(req.body)
    //  fetch data from req body
    const { name, email, password, confirmpassword, mobile } = req.body;

    // Check if all necessary fields are provided
    if (
      !name ||
      !email ||
      !password ||
      !confirmpassword ||
      !mobile ||
      !req.file
    ) {
      res.status(400).json({
        success: false,
        message: "all fields are required",
      });
    }

    // image file fetect
    const file = req.file?.path;

    // upload to clodinary
    async function uploadToCloudinary(file, folder) {
      const options = { folder };
      return await clodinary.uploader.upload(file, options);
    }
    const upload = await uploadToCloudinary(file, "fashion/admin_image");

    // check user and mobile exist or not , password and confirm match or not
    const preuser = await adminDB.findOne({ email: email });

    const mobileverification = await adminDB.findOne({ mobile: mobile });
    if (preuser) {
      res.status(400).json({
        success: false,
        message: "User is already exist",
      });
    } else if (mobileverification) {
      res.status(400).json({
        success: false,
        message: "mobile is already exist",
      });
    } else if (password !== confirmpassword) {
      res.status(400).json({
        success: false,
        message: "password and confirm password not match",
      });
    } else {
      // hash the password
      const hashPassword = await bcrypt.hash(password, 10);

      // entry into database
      const adminData = new adminDB({
        name,
        email,
        password: hashPassword,
        profile: upload.secure_url,
        mobile,
      });
      console.log(adminData);
      await adminData.save();
      res.status(200).json({
        message: "registeration successful",
        adminData,
      });
    }
  } catch (error) {
    // Handle any errors that may occur during the process
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// ---------------->>>>>>>>>> admin login controller <<<<<<<<<<<<<<----*****************************************

// login controller
exports.LogIn = async (req, res) => {
  try {

    // console.log(req.body)
    // fetch data from req body
    const { email, password } = req.body;

    // Check if all necessary fields are provided
    if (!email || !password) {
      res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // check user is exist or not
    const adminValid = await adminDB.findOne({ email: email });
    // console.log(adminValid)
    if (adminValid) {
      // compare password
      const isMatch = await bcrypt.compare(password, adminValid.password);
      if (isMatch) {
        // token generate

        const token = await adminValid.generateAuthtoken();
        // console.log(token);
        const result = {
          adminValid,
          token,
        };

        // // Set cookie for token and return success response

        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        };

        res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            adminValid,
            message: `User Login Success`,
        });

        //    resp send successfully
        // res.status(200).json(result);
      }
    } else {
      res.status(400).json({ error: "invalid details" });
    }

    // resp send successfull
  } catch (error) {
    return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  }
}




// -------------------->>>>>>>> admin atuhentication controller <<<<<<<<---------------------------------
 
exports.getAdmin =async(req,res)=>{
    try {
        const VerifyAdmin = await adminDB.findOne({_id:req.userId});
        res.status(200).json(VerifyAdmin)
    } catch (error) {
        res.status(400).json({error:"invalid Details"})
    }
}



// ------------------------->>>>>>>>> admin logout controller <<<<<<<<<<--------------------------------

exports.Logout =async(req,res)=>{
    try {
        //   console.log(req.rootUser.tokens)

        console.log(req.token)
        req.rootUser.tokens = req.rootUser.tokens.filter((currentElement) => {
            return currentElement.token !== req.token;
        })

        req.rootUser.save();
        res.status(200).json({message:"admin successfullly logout"})
    } catch (error) {
        res.status(400).json(error)
    }
}

