// const fs =require("fs")
// const path = require("path")
// const dirPath = path.join(__dirname,"CRUD")

// const filePath =`${dirPath}/hello.txt`

// // write file 

// // fs.writeFileSync(filePath,"hii aman")

// fs.readFile(filePath,"utf-8",(err,data)=>{
//     console.log(data)
// })


let a = 10;
 let b= 0;
 setTimeout(()=>{
    b=20

    console.log(a + b)
 },2000)

 console.log(a+b)