const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.signUp = async (req, resp) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return resp.status(400).json({
        success: false,
        message: "User already exist",
      });
    }
    let hashedpassword;
    try {
      hashedpassword = await bcrypt.hash(password, 10);
    } catch (error) {
      return resp.status(500).josn({
        success: false,
        message: "Error in hashing Password",
      });
    }

    const user = await User.create({
      name,
      email,
      password: hashedpassword,
      role,
    });

    return resp.status(200).json({
      success: true,
      message: "user Created Successfully",
    });
  } catch (error) {
    console.error(error);
    return resp.status(500).json({
      success: false,
      message: " User can not be registered , please ty again later",
    });
  }
};

// log in

exports.login = async (req, resp) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return resp.status(400).json({
        success: false,
        message: "plaease fill all the details carefully",
      });
    }

    let user = await User.findOne({ email });
    if (!user) {
      return resp.status(401).json({
        success: false,
        message: "user is not registered",
      });
    }
    const payload = {
      email: user.email,
      id: user._id,
      role: user.role,
    };

    if (await bcrypt.compare(password, user.password)) {
      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });

      user = user.toObject();
      user.token = token;
      user.password = undefined;


      const options = {
        expires: new Date( Date.now() + 3*24*60*60*1000),
        httpOnly:true,
    }

    resp.cookie("token", token, options).status(200).json({
        success:true,
        token,
        user,
        message:'User Logged in successfully',
    });

    //   resp.status(200).json({
    //     success: true,
    //     token,
    //     user,
    //     message: "user loggedin successful",
    //   });
    } else {
      return resp.status(403).json({
        success: false,
        message: "Passwrod incoorect",
      });
    }
  } catch (error) {
    console.log(error);
    return resp.status(500).json({
      success: false,
      message: "Login Failure",
      error: error.message,
    });
  }
};
