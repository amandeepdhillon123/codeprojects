require("dotenv").config()
const mongoose = require("mongoose")
const validator = require("validator")
const jwt = require("jsonwebtoken")

// user Schema 
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("not valid email")
            }
        }
    },
    userprofile:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ],

    //  for forgotpasswrod
    varifytoken:{
        type:String
    }
},{timestamps:true});

// token gernearate

userSchema.methods.generateuserAuthToken = async function (){
    try {
        let newtoken = jwt.sign({_id:this.id},process.env.SECRET_KEY,{
            expiresIn:"1d"
        })

        this.tokens = this.tokens.concat({token: newtoken})

        await this.save();
        return newtoken;
    } catch (error) {
        res.status(400).json({
         error:error
        })
    }
}



module.exports =mongoose.model("userDbs",userSchema)