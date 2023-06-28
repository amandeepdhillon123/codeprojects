
const fs = require('fs');

const path = require('path');

const dirPath = path.join(__dirname,"CRUD");

const filepath=(`${dirPath}/kaam.txt`)

// console.log(filepath)

// create file 

// fs.writeFileSync(filepath,"hello ji kaise ho aap sbhi")

// read file

// fs.readFile(filepath,"utf-8",(err,item)=> {
//     console.log(item)
// })

// update file 

// fs.appendFile(filepath,"mt jaa ",(err)=>{
//     if(!err){
//         console.log("file is updated")
//     }

// })


// rename file 

// fs.rename(filepath,`${dirPath}/shyam.txt`,(err)=>{
//     if(!err)
//     {
//         console.log(" file name is updated")
//     }
// })

fs.unlinkSync(`${dirPath}/shyam.txt`)


