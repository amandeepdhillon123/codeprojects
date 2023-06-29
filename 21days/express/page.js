
const express= require('express');

const app = express();

const path = require('path');

const dirPath = path.join(__dirname,"Page")

// console.log(dirPathapp.us

app.use(express.static(dirPath))

app.listen(2299)
