
require("dotenv").config();
const jwt = require("jsonwebtoken");
const userDB = require("../../model/user/userModel");

const userAuthenticate = async (req, res, next) => {
  try {
    //extract token
    const token = req.headers.authorization;
    // console.log(token)

    //if token missing, then return response
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "TOken is missing",
      });
    }

    try {
      // verify token
      const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

      // chekc user exist or not
      const rootUser = await userDB.findOne({ _id: verifyToken._id });
        //  console.log(rootUser)

      req.token = token;
      req.rootUser = rootUser;
      req.userId = rootUser._id;
      req.userMainId = rootUser.id
    } catch (err) {
      //verification - issue
      return res.status(401).json({
        success: false,
        message: "token is invalid",
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Something went wrong while validating the token",
    });
  }
};
module.exports = userAuthenticate;




