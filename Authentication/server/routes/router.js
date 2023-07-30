const express = require("express");
const userdb = require("../models/userSchema");

const router = new express.Router();



// for user registeration 

router.post("/register",async(req,resp)=>{
    console.log(req.body)

    const{fname,email,password,cpassword} = req.body;

    //  any data is missing 
    if(!fname || !email || !password || !cpassword)
    {
        resp.status(422).json({error:"fill all the details"})
    }

        // when data is succesfull get 
    try {   
        //    user is alreaddy exist or not 

          const presuser = await userdb.findOne({email:email})
          if(presuser){

            resp.status(422).json({error:"This email is areday exist"})

          }
          else if(password !== password){
            resp.status(422).json({error:"Password and confirm password not match"})
          }
          else{
            const finalUser =new userdb({
                fname, email, password, cpassword
            })

            // here password hashing

            const storeData = await finalUser.save()

            // console.log(storeData)

            resp.status(201).json({status: 201, storeData})
          }
    } 
    catch (error) {
        resp.status(422).json(error)
        console.log("catch block error")
    }
})

module.exports = router;