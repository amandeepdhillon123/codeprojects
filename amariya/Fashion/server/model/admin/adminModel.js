require("dotenv").config();
const mongoose = require("mongoose");
const validator = require("validator");
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
    unique: true,
    minlength: 10,
    maxlength: 10,
  },
  password: {
    type: String,
    reuired: true,
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


adminSchema.methods.generatertoken = async function () {
  try {
    const payload = {
      _id: this._id,
      email: this.email,
    };
    let newtoken = jwt.sign({_id:this._id}, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    this.tokens = this.tokens.concat({ token: newtoken });

    await this.save();
    return newtoken;
  } catch (error) {
    resp.status(200).json({ error: error });
  }
};

module.exports = mongoose.model("admins", adminSchema);
