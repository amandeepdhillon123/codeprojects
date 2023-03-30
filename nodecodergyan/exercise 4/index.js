const express = require('express');
const path = require("path");

const app = express();
const publicPath = path.join(__dirname,"public");

// console.log(publicPath)
// console.log(__dirname)

app.use(express.static(publicPath));

app.listen(2138);
  