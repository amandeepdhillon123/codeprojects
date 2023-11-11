require("dotenv").config();
const cloudinary = require("../../Cloudinary/cloudinary");
const userDB = require("../../model/user/userModel");
const bcrypt = require("bcrypt");

//--------------------->>> register user controller <<<<<<<------------------

exports.userRegister = async (req, res) => {
  try {
    // console.log(req.body)
    // console.log(req.file)

    //  extract data from req body
    const { firstname, lastname, email, password, confirmpassword } = req.body;

    // check all data provided or not
    if (
      !firstname ||
      !lastname ||
      !email ||
      !password ||
      !confirmpassword ||
      !req.file
    ) {
      return res.status(400).json({
        success: false,
        message: "all fields are required",
      });
    }

    // get image path
    const file = req.file ? req.file.path : "";

    // upload to cloudinary
    async function uploadToCloudinary(file, folder) {
      const options = { folder };

      return await cloudinary.uploader.upload(file, options);
    }

    const upload = await uploadToCloudinary(file, "fashion/user_images");

    // check uase exist or not adn password and confirmpassword mathc
    const preuser = await userDB.findOne({ email: email });

    if (preuser) {
      res.status(400).json({
        message: "This user is already exist",
      });
    } else if (password !== confirmpassword) {
      res.status(400).json({
        message: "password and confirm passwrod does not match",
      });
    }

    // hasing password
    const passwordHash = await bcrypt.hash(password, 10);

    // entry into db

    const userDate = await userDB.create({
      firstname,
      lastname,
      email,
      password: passwordHash,
      userprofile: upload.secure_url,
    });
    // send resp

    res.status(200).json({
      succss: true,
      message: "user registeration successfully",
      userDate,
    });
  } catch (error) {
    // Handle any errors that may occur during the process
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// -------------------->>>>>>>>>>>> user login controller <<<<<<<<<<---------------

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
    const userValid = await userDB.findOne({ email: email });
    // console.log(adminValid)
    if (userValid) {
      // compare password
      const isMatch = await bcrypt.compare(password, userValid.password);
      if (isMatch) {
        // token generate

        const token = await userValid.generateuserAuthToken();
        // console.log(token);
        const result = {
          userValid,
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
            userValid,
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


// --------------------->>>>> user Authenticate ccntroller <<<<<<-----------------------

  
exports.userverify = async(req,res)=>{
  try {
      const verifyUser = await userDB.findOne({_id:req.userId});
      res.status(200).json(verifyUser)
  } catch (error) {
      res.status(400).json(error)
      
  }
}


// ------------------------->>>>>>>>> user logout controller <<<<<<<<<<--------------------------------

exports.Logout =async(req,res)=>{
  try {
      //   console.log(req.rootUser.tokens)

      console.log(req.token)
      req.rootUser.tokens = req.rootUser.tokens.filter((currentElement) => {
          return currentElement.token !== req.token;
      })

      req.rootUser.save();
      res.status(200).json({message:"user successfullly logout"})
  } catch (error) {
      res.status(400).json(error)
  }
}


// ---------------------------->>>>>>      <<<<<<<<-----------------------------------------