const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.auth = (req, resp, next) => {
  try {

    // fetch the token 
    const token = req.body.token;

    // verify the token 
    if (!token) {
      return resp.status(401).json({
        success: false,
        message: "Token Missing",
      });
    }

    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      console.log(payload);
        //   store it for next autorizationg
      req.user = payload;

      console.log(user);
    } catch (error) {
      return resp.status(401).json({
        success: false,
        message: "token is invalid",
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
        success:false,
        message:'Something went wrong, while verifying the token',
    });

  }
};


// for studenst 

exports.isStudent = (req,resp,next)=>{
    try {
           if(req.user.role !== "Student")
           {
            return resp.status(401).json({
                success:false,
                message:"this is for student"
            })
           }
           next();
    } 
    catch (error) {
        
    }
}



exports.isAdmin = (req,resp,next)=>{
    try {
           if(req.user.role !== "Admin")
           {
            return resp.status(401).json({
                success:false,
                message:"this is for Admin"
            })
           }
           next();
    } 
    catch (error) {
        
    }
}
