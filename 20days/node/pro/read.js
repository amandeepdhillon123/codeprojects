const fs = require("fs");

const file = fs.readFileSync("./file/file.txt","utf-8")

// console.log(file)

const read = fs.writeFileSync("./file/file.txt", file + "jai rm")

console.log(read)