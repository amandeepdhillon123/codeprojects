require("dotenv").config()
const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken")

//  create schema

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
        throw Error("not valid emails");
      }
    },
  },
  profile: {
    type: String,
    required: true,
  },
  password:{
    type:String,
    required:true
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 10,
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

// token generate
// adminSchema.methods.generateAuthToken = async function(){
//     try {
//         let newtoken = jwt.sign({_id:this._id},SECRET_KEY,{
//             expiresIn:"1d"
//         });

//         this.tokens = this.tokens.concat({token:newtoken});

//         await this.save()
//         return newtoken;
//     } catch (error) {
//         res.status(400).json({error:error})
//     }
// }

adminSchema.methods.generateAuthtoken =async function(){
    try {
        let newtoken = jwt.sign({_id:this.id},process.env.JWT_SECRET,{
            expiresIn:"1d"
        });

        this.tokens =this.tokens.concat({token:newtoken})

        await this.save();
        return newtoken;
    } catch (error) {
        res.status(400).json({error:error})
    }
}

module.exports = mongoose.model("admins",adminSchema)

