const User = require("../models/User")
 const jwt = require("jsonwebtoken")

 const cloudinary = require("cloudinary").v2;

 require("dotenv").config();

//  login
exports.login =async(req,resp)=>{
    try {
        const {email,password} = req.body;
        
        const user = await User.findOne({email,password})
        
        if(!user){
            return resp.status(400).json({
                success: false,
                message: "Invalid email or password",
              });
        }
      
//    create token 
      const payload ={
        _id:user._id
      }
    const token = jwt.sign(payload,process.env.JWT_SECRET)

    user.token = token

    console.log(token)
     
    const options ={
        expires: new Date(Date.now() + 3*24*60*60
        *1000),
        httpOnly: true,
    }
    resp.cookie("token", token, options).status(200).json({
        success:true,
        token,
        user,
        message:'User Logged in successfully',
    });

   
  

} catch (error) {
        return resp.status(400).json({
            success:true,
            message:error.message
        })
    }
}

// logout 

exports.logout = async (req, res) => {
    try {

        const option = {
            expires: new Date(Date.now()),
            httpOnly: true,
        }
      res.status(200).cookie("token", null,option)
       .json({
          success: true,
          message: "Logged Out Successfully",
        });

    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

//   get user 

exports.getUser = async (req, res) => {
    try {
      const user = await User.findOne().select("-password -email");
  
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };


//   myprofile

exports.myProfile = async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
  
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

  // update user 


  exports.updateUser = async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
  
      const { name, email, password, skills } = req.body;
  
      if (name) {
        user.name = name;
      }
  
      if (email) {
        user.email = email;
      }
      if (password) {
        user.password = password;
      }
  
      if (skills) {
        if (skills.image1) {
          await cloudinary.uploader.destroy(user.skills.image1.public_id);
          const myCloud = await cloudinary.uploader.upload(skills.image1, {
            folder: "portfolio",
          });
  
          user.skills.image1 = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          };
        }
  
        if (skills.image2) {
          await cloudinary.uploader.destroy(user.skills.image2.public_id);
          const myCloud = await cloudinary.uploader.upload(skills.image2, {
            folder: "portfolio",
          });
  
          user.skills.image2 = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          };
        }
  
        if (skills.image3) {
          await cloudinary.uploader.destroy(user.skills.image3.public_id);
          const myCloud = await cloudinary.uploader.upload(skills.image3, {
            folder: "portfolio",
          });
  
          user.skills.image3 = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          };
        }
  
        if (skills.image4) {
          await cloudinary.uploader.destroy(user.skills.image4.public_id);
          const myCloud = await cloudinary.uploader.upload(skills.image4, {
            folder: "portfolio",
          });
  
          user.skills.image4 = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          };
        }
  
        if (skills.image5) {
          await cloudinary.uploader.destroy(user.skills.image5.public_id);
          const myCloud = await cloudinary.uploader.upload(skills.image5, {
            folder: "portfolio",
          });
  
          user.skills.image5 = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          };
        }
  
        if (skills.image6) {
          await cloudinary.uploader.destroy(user.skills.image6.public_id);
          const myCloud = await cloudinary.uploader.upload(skills.image6, {
            folder: "portfolio",
          });
  
          user.skills.image6 = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          };
        }
      }
  
      if (about) {
        if (about.name) {
          user.about.name = about.name;
        }
        if (about.title) {
          user.about.title = about.title;
        }
        if (about.subtitle) {
          user.about.subtitle = about.subtitle;
        }
  
        if (about.description) {
          user.about.description = about.description;
        }
        if (about.quote) {
          user.about.quote = about.quote;
        }
  
        if (about.avatar) {
          await cloudinary.uploader.destroy(user.about.avatar.public_id);
  
          const myCloud = await cloudinary.uploader.upload(about.avatar, {
            folder: "portfolio",
          });
  
          user.about.avatar = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          };
        }
      }
  
      await user.save();
  
      res.status(200).json({
        success: true,
        message: "User Updated Successfully",
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
  
// add time line 


exports.addTimeline = async (req, res) => {
  try {
    const { title, description, date } = req.body;

    const user = await User.findById(req.user._id);

    user.timeline.unshift({
      title,
      description,
      date,
    });

    await user.save();

    res.status(200).json({
      success: true,
      message: "Added To Timline",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// add project 

exports.addProject = async (req, res) => {
  try {
    const { url, title, image, description, techStack } = req.body;

    const user = await User.findById(req.user._id);

    const myCloud = await cloudinary.uploader.upload(image, {
      folder: "portfolio",
    });
    user.projects.unshift({
      url,
      title,
      description,
      techStack,
      image: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });

    await user.save();

    res.status(200).json({
      success: true,
      message: "Added To Projects",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete time line 
  
exports.deleteTimeline = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(req.user._id);

    user.timeline = user.timeline.filter((item) => item._id != id);

    await user.save();

    res.status(200).json({
      success: true,
      message: "Deleted from Timline",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


// delkete project

exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(req.user._id);

    const project = user.projects.find((item) => item._id == id);

    await cloudinary.uploader.destroy(project.image.public_id);

    user.projects = user.projects.filter((item) => item._id != id);

    await user.save();

    res.status(200).json({
      success: true,
      message: "Deleted from Projects",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};