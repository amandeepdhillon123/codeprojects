const fs = require("fs");

// const write = fs.writeFile("./file/file.txt","hello i am amndeep",(err)=>{
// if(err){
//     console.log(err)
// }
// })

// console.log(write)

const read = fs.readFile("./file/file.txt","utf-8",(err,data)=>{
    console.log(data)
})

console.log(read)