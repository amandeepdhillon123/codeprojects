require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB)
    .then(() => console.log("Database connction successful"))
    .catch((error) => {
      console.log("Database connection failed");
      console.log(error);
      process.exit(1);
    });
};

module.exports =dbConnect;
