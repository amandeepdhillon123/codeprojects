
const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useNewUnifiedTopology: true,
    })
    .then(() => console.log(" dbConnnection successful"))
    .catch((error) => {
      console.log("error in dbConnection");

      console.log(error.message);

      process.exit(1);
    });
};


module.exports = dbConnect;