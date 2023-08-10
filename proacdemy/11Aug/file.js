const fs = require("fs")
console.log(fs)

const ram =fs.readFileSync("./file/page.txt","utf-8")
console.log(ram )
let text = 'hello ji kas eho aaps bji'
const write = fs.writeFileSync("./file/output.txt",text);

console.log(write)
