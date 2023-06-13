

const fs= require('fs')

const path = require('path')
const dirPath =path.join(__dirname,"Crud")

const filePath= `${dirPath}/Hello.txt`;

// console.log(filePath)

// console.log(dirPath)

// create file 

// fs.writeFileSync(filePath,"hello jinkais eho aapa sbhi")

// read file 

// fs.readFile(filePath,"utf-8",(err,item)=>{
//     console.log(item)
// })
// fs.appendFile(filePath," ram ram ",(err)=>{
//     console.log("file is updated ")
// })

fs.unlinkSync(`${dirPath}/Hello.txt`)