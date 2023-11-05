require("dotenv").config();
const cloudinary = require("../../Cloudinary/cloudinary");
const adminDB = require("../../model/admin/adminModel");
const bcrypt = require("bcrypt");

// register
exports.Register = async (req, resp) => {
  try {
    const { name, email, password, confirmpassword, mobile } = req.body;

    if (
      !name ||
      !email ||
      !password ||
      !confirmpassword ||
      !mobile ||
      !req.file
    ) {
      resp.status(400).json({
        success: false,
        messsage: "all fields are required",
        error: error.message,
      });
    }

    const file = req.file?.path;

    // cloudinary setup
    async function uploadCcloudainry(file, folder) {
      options = { folder };

      return await cloudinary.uploader.upload(file, options);
    }
    const response = await uploadCcloudainry(file, "fashion");

    const preuser = await adminDB.findOne({ email: email });
    const mobileverification = await adminDB.findOne({ mobile: mobile });

    if (preuser) {
      resp.status(400).json({ error: "This Admin is Already Exist" });
    } else if (mobileverification) {
      resp.status(400).json({ error: "This Mobile is Already Exist" });
    } else if (password !== confirmpassword) {
      resp
        .status(400)
        .json({ error: "password and confirm password not match" });
    } else {
      // const hashPassword =await  bcrypt.hash(password,10)

      const adminData = new adminDB({
        name,
        email,
        mobile,
        // password: hashPassword,
        password,
        profile: response.secure_url,
      });

      console.log("admindata", adminData);

      await adminData.save();
      resp.status(200).json(adminData);
    }

    resp.status(200).json({
      success: true,

      message: "registered successfully",
    });
  } catch (error) {
    resp.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// login

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "all field require" });
    }

    const adminValid = await adminDB.findOne({ email: email });
    if (adminValid) {
      const isMatch = await bcrypt.compare(password, adminValid.password);

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Details" });
      } else {
        // token generate
        const token = await adminValid.generateAuthToken();

        const result = {
          adminValid,
          token,
        };
        res.status(200).json(result);
      }
    } else {
      res.status(400).json({ error: "invalid details" });
    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// admin verify
exports.AdminVerify = async (req, res) => {
  try {
    const VerifyAdmin = await adminDB.findOne({ _id: req.userId });
    res.status(200).json(VerifyAdmin);
  } catch (error) {
    res.status(400).json({ error: "invalid Details" });
  }
};


// admin logout

exports.Logout = async(req,res)=>{
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((currentElement)=>{
            return currentElement.token !== req.token
        });

        req.rootUser.save();
        res.status(200).json({message:"admin Succesfully Logout"})
    } catch (error) {
        res.status(400).json(error)
        
    }
}