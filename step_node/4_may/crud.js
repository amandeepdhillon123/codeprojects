
const fs = require('fs');

const path = require('path');
const dirPath = path.join(__dirname,"crud");

const filePath= (dirPath + "/hello.txt")

// create a file 

// fs.writeFileSync(`${filePath}`,"i am amandeep")


// read a file 



// fs.readFile(filePath,"utf-8",(err,item) =>{
//     console.log(item)
// })


// file update


// fs.appendFile(filePath,"file name is appended", (err) =>{
//     !err ? console.log("file is update") :null;
// })



// rename file 

// fs.rename(filePath,`${dirPath}/ram.txt`,(err) =>{
//     !err ? console.log("file is rename ") : null;
// })


//  unlink file 


fs.unlinkSync(`${dirPath}/ram.txt`)




























