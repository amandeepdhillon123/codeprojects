require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const router = require("./routes/route");
const dbConnect = require("./config/database");
const cors = require("cors");
const PORT = process.env.PORT || 8009;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(router);

dbConnect();

app.listen(PORT, () => {
  console.log(`server starts at PORT ${PORT}`);
});
