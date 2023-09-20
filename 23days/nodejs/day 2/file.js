const fs= require("fs");
const path = require("path");
const dirpath = path.join(__dirname,"file")
const dirname =`${dirpath}`+ "/hello.txt"

// make file 

// fs.writeFileSync(dirname,"hello amandeep");

// read file 

// fs.readFile(dirname,"utf-8",(err,item) =>{
//     console.log(item)
// })

// append file 
fs.appendFile(dirname,"name amandeep",(err)=>{
    if(!err)
    console.log("file updated")
})
