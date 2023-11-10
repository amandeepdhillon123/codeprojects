const mongoose = require("mongoose");
const validator = require("validator");

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

module.exports = mongoose.model("admins",adminSchema)

