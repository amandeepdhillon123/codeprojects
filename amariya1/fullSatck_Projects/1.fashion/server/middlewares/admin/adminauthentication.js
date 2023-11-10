require("dotenv").config();
const jwt = require("jsonwebtoken");
const adminDB = require("../../model/admin/adminModel");

const adminAuthenticate = async (req, res, next) => {
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
      const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

      // chekc user exist or not
      const rootUser = await adminDB.findOne({ _id: verifyToken._id });
        //  console.log(rootUser)

      req.token = token;
      req.rootUser = rootUser;
      req.userId = rootUser._id;
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
module.exports = adminAuthenticate;

// const adminDB = require("../../model/admin/adminModel");
// const jwt = require("jsonwebtoken");
// const SECRET_KEY = "YOUR SECRETE KEY"

// const adminauthenticate = async(req,res,next)=>{
//     try {
//         const token = req.headers.authorization;

//         const verifyToken = jwt.verify(token,SECRET_KEY);

//         const rootUser = await adminDB.findOne({_id:verifyToken._id});

//         if(!rootUser){throw new Error("user not found")}

//         req.token = token
//         req.rootUser = rootUser
//         req.userId = rootUser._id

//         next();

//     } catch (error) {
//         res.status(400).json({error:"Unauthorized No token Provide"})
//     }
// }

// module.exports = adminauthenticate;
