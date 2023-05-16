const { isUtf8 } = require('buffer');
const fs  = require('fs');

const path = require('path');

const dirPath= path.join(__dirname,"CRUD")

const filePath = `${dirPath}/hello.txt`

// console.log(dirPath)
console.log(filePath)

// make file 


// fs.writeFileSync(filePath,"hello node js")

// read file 

// fs.readFile(filePath,"utf-8",(err,item) =>{
//     if(!err)
//     {
//         console.log(item)
//     }
// })

// append or update file 


// fs.appendFile(filePath,"aaple is updated ",(err) =>{
//     if(!err)
//     {
//         console.log("file is updated")
//     }
// })


//  rename file 

// fs.rename(filePath,`${dirPath}/ram.txt`,(err) => {
//     if(!err)
//     {
//         console.log("file name is updated")
//     }
// })


// delete a file mtlb  unlink a file

// fs.unlinkSync(dirPath + '/ram.txt')