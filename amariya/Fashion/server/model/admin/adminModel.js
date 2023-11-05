        require("dotenv").config()
        const mongoose = require("mongoose");
        const validator = require("validator");
        const bcrypt = require("bcrypt")
        const jwt = require("jsonwebtoken");
        const adminSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("not valid email");
            }
            },
        },
        profile: {
            type: String,
            required: true,
        },
        mobile: {
            type: String,
            required: true,
            minlength: 10,
            maxlength: 10,
        },
        password: {
            type: String,
            required: true,
        },
        tokens: [
            {
            token: {
                type: String,
                required: true,
            },
            },
        ],
        });

        // password hashing 
    
  adminSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,12)
    }
    next()
  })


  // token generate
adminSchema.methods.generateAuthToken = async function(){
    try {
        payload ={
            _id:this._id,
            email:this.email
        }
        let newtoken = jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:"1d"
        });

        this.tokens = this.tokens.concat({token:newtoken});

        await this.save()
        return newtoken;
    } catch (error) {
        res.status(400).json({error:error})
    }
}


module.exports = mongoose.model("admins", adminSchema);
