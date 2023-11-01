

const express = require("express");

const router = express.Router();

const {auth} = require("../middlewares/auth")

const {login, logout , getUser,myProfile, 
    updateUser,
    addTimeline,
    addProject,
    deleteTimeline,
    deleteProject

}

= require("../controllers/User")

const {contact} = require("../controllers/mail")

router.post("/login",login)
router.get("/logout",logout)
router.get("/getuser",getUser)

router.put("/admin/update",auth,updateUser)

router.post("/admin/timeline/add",auth,addTimeline)
router.post("/admin/project/add",auth,addProject)

router.delete("/admin/timeline/:id",auth,deleteTimeline)
router.delete("/admin/project/:id",auth,deleteProject)


router.post("/contact",contact)


// protected routes

router.get("/me", auth ,myProfile)
 


module.exports = router;

