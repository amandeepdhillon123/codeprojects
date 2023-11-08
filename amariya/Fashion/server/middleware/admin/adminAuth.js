require("dotenv").config();
const adminDB = require("../../model/admin/adminModel");
const jwt = require("jsonwebtoken");

exports.adminauthenticate = async (req, res, next) => {
 
    try {
      const token = req.headers.authorization;

      const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

      const rootUser = await adminDB.findOne({ _id: verifyToken._id });

      if (!rootUser) {
        throw new Error("user not found");
      }

      req.token = token;
      req.rootUser = rootUser;
      req.userId = rootUser._id;

      next();
    } catch (error) {
      res.status(400).json({ 
        message: "Unauthorized No token Provide" ,
        error:error.message
    
    });
    }

};
