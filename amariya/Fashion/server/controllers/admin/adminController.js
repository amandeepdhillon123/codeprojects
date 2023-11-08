require("dotenv").config();
const cloudinary = require("../../Cloudinary/cloudinary");
const adminDB = require("../../model/admin/adminModel");
const bcrypt = require("bcrypt");

// register

exports.Register = async (req, resp) => {
  try {
    // fetch data
    const { name, email, password, confirmpassword, mobile } = req.body;

    //  validation
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
        message: "all fields are required",
      });
    }

    //  image path get
    const file = req.file?.path;

    // cloudinary setup
    async function uploadCloundinary(file, folder) {
      options = { folder };
      return await cloudinary.uploader.upload(file, options);
    }
    const response = await uploadCloundinary(file, "fashion");

    // check user, mobile , password match
    const preuser = await adminDB.findOne({ email: email });

    const mobileverification = await adminDB.findOne({ mobile: mobile });
    if (preuser) {
      resp.status(400).json({
        success: false,
        message: "User is already exist",
      });
    } else if (mobileverification) {
      resp.status(400).json({
        success: false,
        message: "mobile number is already exist",
      });
    } else if (password !== confirmpassword) {
      resp.status(400).json({
        success: false,
        message: "mobile number is already exist",
      });
    } else {
      // passwor hashing
      const hashpassword = await bcrypt.hash(password, 10);

      // save in to db
      const adminData = new adminDB({
        name,
        email,
        password: hashpassword,
        profile: response.secure_url,
        mobile,
      });

      adminData.save();
      resp.status(200).json(adminData);
    }
    resp.status(200).json({
      successs: true,
      message: "successful registeration",
    });
  } catch (error) {
    resp.status(400).json({
      success: false,
      message: "registeration failed",
      error: error.message,
    });
  }
};

// login

exports.Login = async (req, resp) => {
  try {
    // fetch data
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      resp.status(400).json("all fields are required");
    }
    // check user exist or not
    const adminValid = await adminDB.findOne({ email: email });
    if (adminValid) {
      // compare password
      const isMatch = bcrypt.compare(password, adminValid.password);

      if (!isMatch) {
        resp.status(400).json("invalid details");
      } else {
        // generate token
        const token = await adminValid.generatertoken();
        console.log(token);

        const result = {
          adminValid,
          token,
        };

        resp.status(200).json(result);
      }
    } else {
      resp.status(400).json({ error: "invalid details" });
    }
  } catch (error) {
    resp.status(400).json({
      success: false,
      message: "registeration failed",
      error: error.message,
    });
  }
};

// admin verify
exports.AdminVerify = async (req, res) => {
  try {
    const VerifyAdmin = await adminDB.findOne({ _id: req.userId });
    // console.log(VerifyAdmin)
    res.status(200).json(VerifyAdmin);
  } catch (error) {
    res.status(400).json({ error: "invalid Details" });
  }
};

// admin logout

exports.Logout = async (req, res) => {
  try {
    req.rootUser.tokens = req.rootUser.tokens.filter((currentElement) => {
      return currentElement.token !== req.token;
    });

    req.rootUser.save();
    res.status(200).json({ message: "admin Succesfully Logout" });
  } catch (error) {
    res.status(400).json(error);
  }
};
